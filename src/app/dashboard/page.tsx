import type { Metadata } from "next"
import { BarChart3, BrainCircuit, FileText, Lightbulb, Megaphone, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Dashboard | IntelliCreate",
  description: "AI-powered SaaS platform dashboard for branding, marketing, and business intelligence",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Create New Project</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="intelligence">Intelligence</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <Megaphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">+3 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Generations</CardTitle>
                  <BrainCircuit className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Performance Chart</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Your team's latest actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Lightbulb className="h-4 w-4 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium">New Brand Kit Generated</p>
                        <p className="text-xs text-muted-foreground">AI created a new brand kit for Project Alpha</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Megaphone className="h-4 w-4 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium">Marketing Campaign Launched</p>
                        <p className="text-xs text-muted-foreground">Summer promotion campaign is now live</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium">Analytics Report Ready</p>
                        <p className="text-xs text-muted-foreground">Monthly performance report is available</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium">New Team Member Added</p>
                        <p className="text-xs text-muted-foreground">Sarah Johnson joined the team</p>
                        <p className="text-xs text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks you can perform</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Generate Brand Assets
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Megaphone className="mr-2 h-4 w-4" />
                    Create Marketing Campaign
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Run Market Analysis
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI Credits</CardTitle>
                  <CardDescription>Your current AI generation credits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-4xl font-bold">750</div>
                    <p className="text-sm text-muted-foreground">Credits remaining this month</p>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-3/4 rounded-full bg-primary"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">75% of your monthly allocation</p>
                    <Button className="mt-4" variant="outline">
                      Purchase More Credits
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Tasks scheduled for completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Quarterly Brand Review</p>
                        <span className="text-xs text-red-500 font-medium">Due Tomorrow</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Review and update brand guidelines</p>
                    </div>
                    <div className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Social Media Content</p>
                        <span className="text-xs text-amber-500 font-medium">Due in 3 days</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Generate next week&apos;s social media content</p>
                    </div>
                    <div className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Competitor Analysis</p>
                        <span className="text-xs text-green-500 font-medium">Due in 1 week</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Run AI analysis on competitor strategies</p>
                    </div>
                    <div className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Monthly Performance Report</p>
                        <span className="text-xs text-green-500 font-medium">Due in 2 weeks</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Generate comprehensive performance report</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="branding" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Branding Tools</CardTitle>
                <CardDescription>AI-powered tools to create and manage your brand identity</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Logo Generator</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Create professional logos based on your brand description
                      </p>
                      <Button>Generate Logo</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Color Palette</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Generate harmonious color schemes for your brand
                      </p>
                      <Button>Create Palette</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Brand Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Generate comprehensive brand guidelines</p>
                      <Button>Create Guidelines</Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Brand Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <Lightbulb className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Project Alpha Rebrand</p>
                              <p className="text-xs text-muted-foreground">Created 2 days ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <Lightbulb className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Summer Campaign Identity</p>
                              <p className="text-xs text-muted-foreground">Created 1 week ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <Lightbulb className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Product Line Branding</p>
                              <p className="text-xs text-muted-foreground">Created 2 weeks ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="marketing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Marketing Tools</CardTitle>
                <CardDescription>AI-powered tools to create and manage your marketing campaigns</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Content Generator</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Create engaging marketing content for various platforms
                      </p>
                      <Button>Generate Content</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Ad Campaign</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Create targeted ad campaigns with AI optimization
                      </p>
                      <Button>Create Campaign</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Email Marketing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Design and optimize email marketing sequences
                      </p>
                      <Button>Create Sequence</Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Campaigns</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <Megaphone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Summer Promotion</p>
                              <div className="flex items-center">
                                <div className="h-2 w-24 rounded-full bg-muted mr-2">
                                  <div className="h-full w-3/4 rounded-full bg-green-500"></div>
                                </div>
                                <p className="text-xs text-muted-foreground">75% complete</p>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <Megaphone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Product Launch</p>
                              <div className="flex items-center">
                                <div className="h-2 w-24 rounded-full bg-muted mr-2">
                                  <div className="h-full w-1/4 rounded-full bg-amber-500"></div>
                                </div>
                                <p className="text-xs text-muted-foreground">25% complete</p>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <Megaphone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Holiday Special</p>
                              <div className="flex items-center">
                                <div className="h-2 w-24 rounded-full bg-muted mr-2">
                                  <div className="h-full w-1/2 rounded-full bg-blue-500"></div>
                                </div>
                                <p className="text-xs text-muted-foreground">50% complete</p>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="intelligence" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Business Intelligence Tools</CardTitle>
                <CardDescription>AI-powered tools to analyze and optimize your business performance</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Market Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Analyze market trends and competitor strategies
                      </p>
                      <Button>Run Analysis</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Performance Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Track and analyze key business performance indicators
                      </p>
                      <Button>View Metrics</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Predictive Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Forecast future trends and business outcomes</p>
                      <Button>Generate Forecast</Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Q2 Performance Report</p>
                              <p className="text-xs text-muted-foreground">Generated 1 week ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Competitor Analysis</p>
                              <p className="text-xs text-muted-foreground">Generated 2 weeks ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Market Trend Forecast</p>
                              <p className="text-xs text-muted-foreground">Generated 1 month ago</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 