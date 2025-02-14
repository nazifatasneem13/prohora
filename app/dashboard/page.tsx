//@ts-nocheck
"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Report, ReportStatus, ReportType } from "@prisma/client";
import { signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [reports, setReports] = useState<Report[]>([]);
  const [filter, setFilter] = useState<ReportStatus | "ALL">("ALL");
  const [typeFilter, setTypeFilter] = useState<ReportType | "ALL">("ALL");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/reports");
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateReportStatus = async (
    reportId: string,
    newStatus: ReportStatus
  ) => {
    try {
      const response = await fetch(`/api/reports/${reportId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchReports();
      }
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };

  const filteredReports = reports.filter((report) => {
    const statusMatch = filter === "ALL" || report.status === filter;
    const typeMatch = typeFilter === "ALL" || report.type === typeFilter;
    return statusMatch && typeMatch;
  });

  const getStatusColor = (status: ReportStatus) => {
    const colors = {
      PENDING: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
      IN_PROGRESS: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
      RESOLVED: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
      DISMISSED: "bg-muted/10 text-muted-foreground border border-border",
    };
    return colors[status];
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background dark:bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-black text-foreground">
      <nav className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <div className="flex items-center gap-6">
              <span className="text-muted-foreground">
                {session?.user?.name || "Admin"}
              </span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 text-sm font-medium text-foreground bg-card rounded-lg hover:bg-accent border border-border transition-all"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value as ReportStatus | "ALL")
              }
              className="bg-background border border-border text-foreground rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
            >
              <option value="ALL">All Statuses</option>
              {Object.values(ReportStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value as ReportType | "ALL")
              }
              className="bg-background border border-border text-foreground rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
            >
              <option value="ALL">All Types</option>
              {Object.values(ReportType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="text-muted-foreground">
            {filteredReports.length} Reports
          </div>
        </div>

        <div className="grid gap-4">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-border/70 transition-all"
            >
              <div className="flex justify-between items-start gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-medium text-foreground">
                      {report.title}
                    </h2>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        report.status
                      )}`}
                    >
                      {report.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {report.description}
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                      </div>
                      {report.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                      </div>
                      {report.location || "N/A"}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                      </div>
                      {new Date(report.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {report.image && (
                    <img
                      src={report.image}
                      alt="Report"
                      className="mt-4 rounded-lg border border-border"
                    />
                  )}
                </div>
                <select
                  value={report.status}
                  onChange={(e) =>
                    updateReportStatus(
                      report.id,
                      e.target.value as ReportStatus
                    )
                  }
                  className="bg-background border border-border text-foreground rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
                >
                  {Object.values(ReportStatus).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          {filteredReports.length === 0 && (
            <div className="text-center py-12 text-muted-foreground bg-card/50 rounded-xl border border-border">
              No reports found matching the selected filters.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
