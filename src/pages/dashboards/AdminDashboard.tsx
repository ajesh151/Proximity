
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Bell, Flag, Shield, Users, FileCheck, Settings } from "lucide-react";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("verifications");
  
  // Mock verification data
  const verificationRequests = [
    {
      id: "v1",
      organizationName: "TechFlow Solutions",
      type: "Startup",
      documentType: "Business License",
      submittedDate: "2025-04-15T14:30:00",
      status: "pending"
    },
    {
      id: "v2",
      organizationName: "Healthcare Innovations Inc",
      type: "Enterprise",
      documentType: "Certificate of Incorporation",
      submittedDate: "2025-04-14T09:15:00",
      status: "pending"
    },
    {
      id: "v3",
      organizationName: "Green Energy Co",
      type: "Startup",
      documentType: "Business License",
      submittedDate: "2025-04-13T16:45:00",
      status: "pending"
    }
  ];
  
  // Mock reports data
  const reportedContent = [
    {
      id: "r1",
      type: "Pitch",
      title: "Misleading Financial Information",
      reportedItem: "QuantumAI Edge Computing Platform",
      reportedBy: "Enterprise Solutions Inc",
      date: "2025-04-18T11:20:00",
      status: "new"
    },
    {
      id: "r2",
      type: "Comment",
      title: "Inappropriate Language",
      reportedItem: "Comment on MedSecure Pitch",
      reportedBy: "HealthTech Partners",
      date: "2025-04-17T15:40:00",
      status: "in-review"
    }
  ];
  
  // Mock platform statistics
  const stats = {
    users: {
      total: 1250,
      active: 876,
      new: 48,
      verifiedPercent: 92
    },
    content: {
      pitches: 342,
      comments: 1843,
      messages: 6753
    },
    verifications: {
      pending: 18,
      approved: 1156,
      rejected: 76,
      averageTime: "1.2 days"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl font-bold mb-1">Admin Dashboard</h1>
              <Badge variant="destructive" className="ml-3">Staff Only</Badge>
            </div>
            <p className="text-muted-foreground">
              Manage platform verifications, content, and users
            </p>
          </div>
        </div>
        
        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Pending Verifications</p>
                  <p className="text-2xl font-bold">{stats.verifications.pending}</p>
                  <p className="text-amber-600 text-xs">Avg. time: {stats.verifications.averageTime}</p>
                </div>
                <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Reported Content</p>
                  <p className="text-2xl font-bold">{reportedContent.length}</p>
                  <p className="text-red-600 text-xs">{reportedContent.filter(r => r.status === "new").length} new reports</p>
                </div>
                <div className="h-12 w-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <Flag className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Users</p>
                  <p className="text-2xl font-bold">{stats.users.total}</p>
                  <p className="text-green-600 text-xs">{stats.users.new} new this week</p>
                </div>
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Verification Rate</p>
                  <p className="text-2xl font-bold">{stats.users.verifiedPercent}%</p>
                  <p className="text-blue-600 text-xs">{stats.verifications.approved} verified businesses</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Alert className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            There are {stats.verifications.pending} pending verifications that require your attention.
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="verifications" value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="verifications">Business Verification</TabsTrigger>
            <TabsTrigger value="reports">Content Reports</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="settings">System Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="verifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Business Verifications</CardTitle>
              </CardHeader>
              <CardContent>
                {verificationRequests.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b">
                          <th className="pb-2 font-medium">Organization</th>
                          <th className="pb-2 font-medium">Type</th>
                          <th className="pb-2 font-medium">Document</th>
                          <th className="pb-2 font-medium">Submitted</th>
                          <th className="pb-2 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {verificationRequests.map((req) => (
                          <tr key={req.id} className="border-b">
                            <td className="py-3">{req.organizationName}</td>
                            <td className="py-3">{req.type}</td>
                            <td className="py-3">{req.documentType}</td>
                            <td className="py-3">{new Date(req.submittedDate).toLocaleDateString()}</td>
                            <td className="py-3">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">View</Button>
                                <Button size="sm">Verify</Button>
                                <Button size="sm" variant="destructive">Reject</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 mx-auto text-green-600" />
                    <h3 className="mt-2 text-lg font-medium">All caught up!</h3>
                    <p className="text-muted-foreground">No pending verification requests</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Reported Content</CardTitle>
              </CardHeader>
              <CardContent>
                {reportedContent.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium">{report.title}</h3>
                          {report.status === "new" ? (
                            <Badge variant="destructive" className="ml-2">New</Badge>
                          ) : (
                            <Badge variant="outline" className="ml-2">In Review</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {report.type}: {report.reportedItem}
                        </p>
                        <p className="text-sm mt-2">
                          Reported by: {report.reportedBy} on {new Date(report.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">View Content</Button>
                        <Button size="sm">Review</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-20">
                <Users className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">User Management Interface</h3>
                <p className="text-muted-foreground mt-2">
                  Manage users, roles, and permissions
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-20">
                <Settings className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Platform Configuration</h3>
                <p className="text-muted-foreground mt-2">
                  Configure platform settings, notifications, and integrations
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
