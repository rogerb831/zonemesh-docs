import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

/**
 * Shared documentation content for ZoneMesh
 * This component contains all the documentation content and can be used
 * in both Next.js (auth0-saas-starter) and React/Vite (ZoneMesh-Web) apps.
 * 
 * Framework-specific wrappers (like PageHeader) should be added by the consuming app.
 */
export function DocumentationContent() {
  return (
    <>
      {/* Table of Contents */}
      <Card>
        <CardHeader>
          <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-2">Getting Started</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#overview" className="hover:underline">Overview</a></li>
                <li><a href="#getting-started" className="hover:underline">Getting Started Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Core Concepts</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#zones" className="hover:underline">Zones</a></li>
                <li><a href="#hubs" className="hover:underline">Hubs</a></li>
                <li><a href="#targets" className="hover:underline">Targets</a></li>
                <li><a href="#integrations" className="hover:underline">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Management</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#editing-deleting" className="hover:underline">Editing & Deleting</a></li>
                <li><a href="#billing" className="hover:underline">Billing & Subscriptions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#troubleshooting" className="hover:underline">Troubleshooting</a></li>
                <li><a href="#best-practices" className="hover:underline">Best Practices</a></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {/* Overview Section */}
        <Card id="overview">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>What is ZoneMesh?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              ZoneMesh is a DNS synchronization platform that enables you to keep DNS zones synchronized across multiple cloud providers and on-premises infrastructure. 
              You deploy hub containers in your own infrastructure that pull zones from sources and push them to targets, giving you full control over your DNS data.
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Multi-provider DNS synchronization (Route 53, AXFR - GCP Cloud DNS and Azure DNS coming soon)</li>
                <li>Real-time status monitoring and sync history</li>
                <li>Secure credential management with encryption</li>
                <li>Automated zone synchronization</li>
                <li>Hub health testing and diagnostics</li>
                <li>Bulk operations for managing multiple resources</li>
                <li>Flexible subscription plans (Free and Pro)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How It Works</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Configure cloud provider credentials in the Integrations page</li>
                <li>Create DNS zones and specify where to pull DNS records from (sources)</li>
                <li>Deploy hub containers in your infrastructure</li>
                <li>Attach zones to hubs</li>
                <li>Configure targets (where to push DNS records to)</li>
                <li>Hubs automatically sync zones on a schedule and push changes to targets</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started Section */}
        <Card id="getting-started">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Your first DNS zone in 5 minutes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Step 1: Set Up Cloud Credentials (If Needed)</h3>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Note:</strong> Cloud credentials are only required if you plan to use Route 53 as a source or target. 
                If you're only using AXFR (zone transfer) for sources and targets, you can skip this step and proceed to creating zones.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Coming Soon:</strong> GCP Cloud DNS and Azure DNS support will be available in the near future.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                If you need cloud credentials for Route 53, configure them:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>Navigate to <strong>Integrations</strong> in the sidebar</li>
                <li>Click <strong>Add Credential</strong></li>
                <li>Select <strong>AWS Route 53</strong> as your provider</li>
                <li>Enter your AWS credentials:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Access Key ID:</strong> Your AWS Access Key ID</li>
                    <li><strong>Secret Access Key:</strong> Your AWS Secret Access Key</li>
                  </ul>
                </li>
                <li>Give your credential a descriptive name</li>
                <li>Click <strong>Create</strong></li>
              </ol>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Step 2: Create a Zone</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Create a DNS zone that will be synchronized.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>Navigate to <strong>Zones</strong> in the sidebar</li>
                <li>Click <strong>Add Zone</strong></li>
                <li>Enter your zone name (e.g., <code className="bg-muted px-1 rounded">example.com</code>)</li>
                <li>Select a source type:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Route 53:</strong> Pull from AWS Route 53 (currently supported)</li>
                    <li><strong>AXFR:</strong> Pull via zone transfer from a master DNS server (currently supported)</li>
                    <li><strong>GCP:</strong> Pull from Google Cloud DNS (coming soon)</li>
                    <li><strong>Azure:</strong> Pull from Azure DNS (coming soon)</li>
                  </ul>
                </li>
                <li>Configure source settings (hosted zone ID, project ID, master IP, etc.)</li>
                <li>Click <strong>Create Zone</strong></li>
              </ol>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Step 3: Deploy a Hub</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Deploy a hub container to sync your zones. Hubs run in your infrastructure and pull zones from sources, 
                serve them via NSD, and push them to targets.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>Navigate to the <strong>Hubs</strong> page from the main navigation, or open your zone detail page</li>
                <li>Click <strong>Create Hub</strong></li>
                <li>Enter a hub label (e.g., <code className="bg-muted px-1 rounded">us-east-1-hub</code>)</li>
                <li>Click <strong>Create Hub</strong></li>
                <li>Copy the Docker command and hub token that appear (token is only shown once!)</li>
                <li>Run the Docker command on a server with Docker installed</li>
                <li>The hub will automatically connect and start syncing zones</li>
                <li>If created from the hubs page, attach the hub to zones from the zone detail page</li>
              </ol>
              
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm font-semibold mb-2">Example Docker Command:</p>
                <pre className="text-xs overflow-x-auto">
{`docker run -d \\
  --name dns-sync-hub-<your-hub-id> \\
  -e HUB_ID=your-hub-id \\
  -e HUB_TOKEN=your-hub-token \\
  -e CONTROL_PLANE_URL=https://your-saas.com \\
  -p 53:53/tcp -p 53:53/udp \\
  ghcr.io/rogerb831/zonemesh/dns-hub:latest`}
                </pre>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Step 4: Configure Targets</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Configure where your zones should be pushed to after being synced.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>On your zone detail page, scroll to the <strong>Targets</strong> section</li>
                <li>Click <strong>Add Target</strong></li>
                <li>Select target type:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Route 53:</strong> Push to AWS Route 53 (currently supported) - requires Hosted Zone ID and region</li>
                    <li><strong>AXFR:</strong> Configure as AXFR secondary (currently supported) - requires secondary server IP, port, and optional TSIG key</li>
                    <li><strong>GCP:</strong> Push to Google Cloud DNS (coming soon)</li>
                    <li><strong>Azure:</strong> Push to Azure DNS (coming soon)</li>
                  </ul>
                </li>
                <li>Configure target settings based on the selected type</li>
                <li>Select the appropriate credential</li>
                <li>Click <strong>Create Target</strong></li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Zones Section */}
        <Card id="zones">
          <CardHeader>
            <CardTitle>Zones</CardTitle>
            <CardDescription>Managing DNS zones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Zone Sources</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Zones can be pulled from various sources. Each source type requires different configuration.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Route 53</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pull zones from AWS Route 53. Requires an AWS credential with Route 53 read permissions.
                  </p>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-xs font-mono mb-1">Source Configuration:</p>
                    <pre className="text-xs overflow-x-auto">
{`{
  "hostedZoneId": "Z1234567890ABC",
  "region": "us-east-1"
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">GCP Cloud DNS <Badge variant="outline" className="ml-2">Coming Soon</Badge></h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pull zones from Google Cloud DNS. This feature will be available in the near future.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Azure DNS <Badge variant="outline" className="ml-2">Coming Soon</Badge></h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pull zones from Azure DNS. This feature will be available in the near future.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">AXFR (Zone Transfer)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pull zones via AXFR from a master DNS server. Supports TSIG authentication.
                  </p>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-xs font-mono mb-1">Source Configuration:</p>
                    <pre className="text-xs overflow-x-auto">
{`{
  "masterIp": "192.0.2.1",
  "port": 53,
  "tsigKey": "base64-encoded-key",
  "tsigAlgorithm": "hmac-sha256"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Zone Synchronization</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Zones are automatically synchronized by hubs on a schedule (every 10 minutes by default). 
                You can also trigger manual syncs and monitor sync status in real-time.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Automatic Sync:</strong> Hubs check for zone updates every 10 minutes</li>
                <li><strong>Manual Sync:</strong> Click <strong>Sync Now</strong> on a hub to trigger immediate synchronization</li>
                <li><strong>Config Refresh:</strong> Click <strong>Refresh Config</strong> to fetch the latest zone configuration from the control plane</li>
                <li><strong>Status Monitoring:</strong> View sync status and history in the zone detail page</li>
                <li><strong>Target Status:</strong> See per-target sync status (fully synced, partial sync, error, etc.)</li>
                <li><strong>Push Retry Limit:</strong> Configure how many times a hub should retry pushing to a target if it fails (default: 10, range: 0-50)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Sync Status History</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The zone detail page displays sync status history for the last 24 hours. This helps you track sync events and troubleshoot issues.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>24-Hour Window:</strong> Only sync events from the last 24 hours are displayed</li>
                <li><strong>Scrollable List:</strong> Fixed-height scrollable table for easy navigation</li>
                <li><strong>Clear History:</strong> Use the <strong>Clear</strong> button to remove all status history for a zone</li>
                <li><strong>Automatic Cleanup:</strong> Status history older than 24 hours is automatically removed</li>
                <li><strong>Real-Time Updates:</strong> Status updates appear in real-time as syncs complete</li>
                <li><strong>Per-Hub History:</strong> View sync history for each hub attached to the zone</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Editing and Deleting Zones</h3>
              <p className="text-sm text-muted-foreground mb-3">
                You can edit zone source configuration or delete zones from the zones list or zone detail page.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Edit Zone:</strong> Click the edit icon on a zone to update its source type and configuration</li>
                <li><strong>Delete Zone:</strong> Use the delete action to permanently remove a zone and all its targets</li>
                <li><strong>Bulk Delete:</strong> Select multiple zones and delete them at once from the zones list page</li>
                <li><strong>Note:</strong> Deleting a zone will also delete all associated targets, but hubs remain available for other zones</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Hubs Section */}
        <Card id="hubs">
          <CardHeader>
            <CardTitle>Hubs</CardTitle>
            <CardDescription>BYOC hub deployment and management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">What is a Hub?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A hub is a Docker container that runs in your infrastructure. It:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Pulls DNS zones from configured sources</li>
                <li>Serves zones via NSD (authoritative DNS server)</li>
                <li>Pushes zones to configured targets</li>
                <li>Reports sync status to the control plane</li>
                <li>Supports AXFR/IXFR zone transfers</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Hub Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Docker:</strong> Docker or Docker Compose installed</li>
                <li><strong>Network:</strong> Outbound HTTPS access to the control plane</li>
                <li><strong>Ports:</strong> Port 53 TCP/UDP (for DNS queries and AXFR transfers)</li>
                <li><strong>Resources:</strong> Minimal - 512MB RAM, 1 CPU core</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Hub Status</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Hubs report their status in real-time. Status indicators:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500">online</Badge>
                  <span className="text-sm text-muted-foreground">Hub is connected and syncing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">offline</Badge>
                  <span className="text-sm text-muted-foreground">Hub is not connected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">error</Badge>
                  <span className="text-sm text-muted-foreground">Hub encountered sync errors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">provisioning</Badge>
                  <span className="text-sm text-muted-foreground">Hub is initializing</span>
                </div>
              </div>
            </div>

            <Separator />

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Hub Management Page</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Access the dedicated hubs management page from the navigation menu to view and manage all your hubs in one place.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>View All Hubs:</strong> See all hubs across all zones with their status and attached zones</li>
                <li><strong>Create Hub:</strong> Create new hubs without attaching to a zone first</li>
                <li><strong>Hub Actions:</strong> Sync, refresh config, restart, test services, or delete hubs</li>
                <li><strong>Zone Links:</strong> Click on zone names to navigate to zone detail pages</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Hub Management Actions</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Sync Now:</strong> Trigger immediate zone synchronization for all zones attached to the hub</li>
                <li><strong>Refresh Config:</strong> Fetch latest zone configuration from control plane</li>
                <li><strong>Restart Hub:</strong> Send restart command to hub container (reloads DNS server configuration)</li>
                <li><strong>Services Test:</strong> Test hub services to verify DNS server and DNS resolution are working correctly</li>
                <li><strong>Detach:</strong> Remove hub from a zone (hub container continues running and can be attached to other zones)</li>
                <li><strong>Delete Hub:</strong> Permanently delete a hub (only available if the hub is not attached to any zones)</li>
                <li><strong>Bulk Delete:</strong> Select multiple hubs and delete them at once from the hubs list page</li>
                <li><strong>Update Software:</strong> Update hub container software to the latest version (bulk update available)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Services Test</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The Services Test feature allows you to verify that your hub is functioning correctly by testing two key services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>DNS Server Test:</strong> Verifies that the hub's DNS server is running and responding</li>
                <li><strong>DNS Resolution Test:</strong> Verifies that the hub can resolve DNS queries correctly</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                To run a services test, navigate to a hub detail page or use the "Test Services" button in the hub actions menu. 
                Test results will appear showing whether each service passed or failed, along with any error messages.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Hub Detail Page</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Each hub has a dedicated detail page where you can view and manage all zones attached to the hub, 
                monitor hub status, and view sync history.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Attached Zones:</strong> View all zones currently attached to the hub</li>
                <li><strong>Attach Zone:</strong> Add zones to the hub from the hub detail page</li>
                <li><strong>Detach Zone:</strong> Remove zones from the hub</li>
                <li><strong>Status History:</strong> View sync history for all zones on this hub (last 24 hours)</li>
                <li><strong>Hub Information:</strong> View hub ID, status, last seen time, and creation date</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Targets Section */}
        <Card id="targets">
          <CardHeader>
            <CardTitle>Targets</CardTitle>
            <CardDescription>Configuring DNS provider targets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Target Types</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Zones can be pushed to various DNS providers. Each target type requires different configuration.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Route 53 Target</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Push zones to AWS Route 53. Requires an AWS credential with Route 53 write permissions.
                  </p>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-xs font-mono mb-1">Target Configuration:</p>
                    <pre className="text-xs overflow-x-auto">
{`{
  "hostedZoneId": "Z1234567890ABC",
  "region": "us-east-1"
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">GCP Cloud DNS Target <Badge variant="outline" className="ml-2">Coming Soon</Badge></h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Push zones to Google Cloud DNS. This feature will be available in the near future.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Azure DNS Target <Badge variant="outline" className="ml-2">Coming Soon</Badge></h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Push zones to Azure DNS. This feature will be available in the near future.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">AXFR Secondary Server</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Configure NSD to allow zone transfers to secondary DNS servers. The secondary servers will pull 
                    zones via AXFR/IXFR from the hub's NSD server.
                  </p>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-xs font-mono mb-1">Target Configuration:</p>
                    <pre className="text-xs overflow-x-auto">
{`{
  "ip": "192.0.2.1",
  "port": 53,
  "tsigKey": "base64-encoded-key",
  "tsigAlgorithm": "hmac-sha256"
}`}
                    </pre>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Note:</strong> AXFR targets don't require pushing - the hub's DNS server is configured to 
                    allow zone transfers to the specified IP addresses. Secondary servers pull zones automatically.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Editing and Deleting Targets</h3>
              <p className="text-sm text-muted-foreground mb-3">
                You can edit target configuration or delete targets from the zone detail page or the targets list page.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Edit Target:</strong> Click the edit icon on a target to update its configuration and credentials</li>
                <li><strong>Delete Target:</strong> Use the delete action to remove a target from a zone</li>
                <li><strong>Bulk Delete:</strong> Select multiple targets and delete them at once from the targets list page</li>
                <li><strong>Target Status:</strong> View real-time sync status for each target (fully synced, partial sync, error, etc.)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Integrations Section */}
        <Card id="integrations">
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
            <CardDescription>Managing cloud provider credentials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">When Are Credentials Needed?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Cloud provider credentials are only required when using Route 53 as a source or target. 
                If you're using AXFR (zone transfer) for both sources and targets, you don't need to configure any cloud credentials.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li><strong>Route 53 source/target:</strong> Requires AWS credentials (currently supported)</li>
                <li><strong>AXFR source/target:</strong> No cloud credentials needed (uses zone transfer protocol, currently supported)</li>
                <li><strong>GCP Cloud DNS source/target:</strong> Coming soon - will require GCP service account credentials</li>
                <li><strong>Azure DNS source/target:</strong> Coming soon - will require Azure service principal credentials</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Credential Security</h3>
              <p className="text-sm text-muted-foreground mb-3">
                All credentials are encrypted at rest and are never stored in plain text. Credentials are only decrypted 
                when needed by hubs for DNS operations, ensuring your cloud provider credentials remain secure.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">AWS Route 53 Credentials</h3>
              <p className="text-sm text-muted-foreground mb-3">
                To use Route 53 as a source or target, you need AWS Access Keys. Follow these steps to create and configure them.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Step 1: Create AWS IAM User and Access Keys</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                    <li>Log in to the <a href="https://console.aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AWS Console</a></li>
                    <li>Navigate to <strong>IAM</strong> → <strong>Users</strong> → <strong>Create User</strong></li>
                    <li>Enter a username (e.g., <code className="bg-muted px-1 rounded">dns-sync-route53</code>)</li>
                    <li>Click <strong>Next</strong> to set permissions</li>
                    <li>Attach policies with Route 53 permissions:
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li><code className="bg-muted px-1 rounded">AmazonRoute53ReadOnlyAccess</code> (for pulling zones as a source)</li>
                        <li><code className="bg-muted px-1 rounded">AmazonRoute53FullAccess</code> (for pushing zones as a target)</li>
                        <li>Or create a custom policy with only the permissions you need (see below)</li>
                      </ul>
                    </li>
                    <li>Click <strong>Next</strong> and then <strong>Create User</strong></li>
                    <li>Open the user → <strong>Security credentials</strong> tab</li>
                    <li>Click <strong>Create access key</strong></li>
                    <li>Select <strong>Application running outside AWS</strong></li>
                    <li>Click <strong>Next</strong> and then <strong>Create access key</strong></li>
                    <li><strong>Important:</strong> Copy the <strong>Access Key ID</strong> and <strong>Secret Access Key</strong> immediately - the secret is only shown once!</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Step 2: Add Credentials to the Application</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                    <li>Navigate to <strong>Integrations</strong> in the sidebar (or go to <code className="bg-muted px-1 rounded">/dashboard/integrations</code>)</li>
                    <li>Click <strong>Add Credential</strong></li>
                    <li>Fill in the form:
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li><strong>Credential Name:</strong> A descriptive name (e.g., "Production Route 53")</li>
                        <li><strong>Provider:</strong> Select "AWS Route 53"</li>
                        <li><strong>Access Key ID:</strong> Your AWS Access Key ID</li>
                        <li><strong>Secret Access Key:</strong> Your AWS Secret Access Key</li>
                        <li><strong>Region:</strong> AWS region (e.g., <code className="bg-muted px-1 rounded">us-east-1</code>)</li>
                      </ul>
                    </li>
                    <li>Click <strong>Create Credential</strong></li>
                  </ol>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Note:</strong> Route 53 is a global service, but API calls require a region. Use <code className="bg-muted px-1 rounded">us-east-1</code> as the default.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Required AWS Permissions</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    For Route 53 operations, the IAM user needs the following permissions:
                  </p>
                  <div className="bg-muted p-3 rounded-md mb-2">
                    <p className="text-xs font-mono mb-1">Custom IAM Policy (JSON):</p>
                    <pre className="text-xs overflow-x-auto">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "route53:ListHostedZones",
        "route53:GetHostedZone",
        "route53:ListResourceRecordSets",
        "route53:ChangeResourceRecordSets",
        "route53:GetChange"
      ],
      "Resource": "*"
    }
  ]
}`}
                    </pre>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Or use the managed AWS policies:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4">
                    <li><code className="bg-muted px-1 rounded">AmazonRoute53ReadOnlyAccess</code> - For read-only operations (pulling zones)</li>
                    <li><code className="bg-muted px-1 rounded">AmazonRoute53FullAccess</code> - For read/write operations (pulling and pushing zones)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Using Credentials</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Once created, credentials are available when:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Creating a zone with Route 53 as the source</li>
                    <li>Adding a Route 53 target to push zones to</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Tip:</strong> You can create multiple credential sets (e.g., one for development, one for production) and select the appropriate one for each zone or target.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">GCP Credentials <Badge variant="outline" className="ml-2">Coming Soon</Badge></h3>
              <p className="text-sm text-muted-foreground mb-3">
                GCP Cloud DNS support will be available in the near future. When available, you'll need to create a service account 
                in your GCP project with the appropriate DNS roles.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Azure Credentials <Badge variant="outline" className="ml-2">Coming Soon</Badge></h3>
              <p className="text-sm text-muted-foreground mb-3">
                Azure DNS support will be available in the near future. When available, you'll need to create an Azure AD application 
                (service principal) with the appropriate DNS zone permissions.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Editing and Deleting Credentials</h3>
              <p className="text-sm text-muted-foreground mb-3">
                You can edit credential configuration or delete credentials from the integrations page.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Edit Credential:</strong> Click the edit icon on a credential to update its configuration</li>
                <li><strong>Delete Credential:</strong> Use the delete action to remove a credential (only if not in use by any zones or targets)</li>
                <li><strong>Note:</strong> You cannot delete credentials that are currently being used by zones or targets. 
                  Update or remove those zones/targets first.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Editing and Deleting Section */}
        <Card id="editing-deleting">
          <CardHeader>
            <CardTitle>Editing and Deleting Resources</CardTitle>
            <CardDescription>Managing your zones, hubs, targets, and credentials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">General Guidelines</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>Most resources can be edited by clicking the edit icon (pencil) next to the resource</li>
                <li>Delete actions are available in dropdown menus or action buttons</li>
                <li>Bulk operations (delete multiple items) are available on list pages by selecting items with checkboxes</li>
                <li>Some resources cannot be deleted if they are in use (e.g., credentials used by zones/targets, hubs attached to zones)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Zones</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Edit:</strong> Update zone name, source type, and source configuration</li>
                <li><strong>Delete:</strong> Permanently removes the zone and all its targets (hubs remain available)</li>
                <li><strong>Bulk Delete:</strong> Select multiple zones from the zones list page and delete them at once</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Hubs</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Edit:</strong> Hub labels can be updated (though this is typically not necessary)</li>
                <li><strong>Delete:</strong> Only available if the hub is not attached to any zones</li>
                <li><strong>Detach:</strong> Remove hub from zones without deleting the hub itself</li>
                <li><strong>Bulk Delete:</strong> Select multiple hubs from the hubs list page and delete them at once</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Targets</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Edit:</strong> Update target type, configuration, and credentials</li>
                <li><strong>Delete:</strong> Remove target from a zone</li>
                <li><strong>Bulk Delete:</strong> Select multiple targets from the targets list page and delete them at once</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Credentials</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Edit:</strong> Update credential name and configuration (e.g., access keys, service account JSON)</li>
                <li><strong>Delete:</strong> Only available if the credential is not used by any zones or targets</li>
                <li><strong>Note:</strong> Before deleting a credential, ensure no zones or targets are using it</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Billing Section */}
        <Card id="billing">
          <CardHeader>
            <CardTitle>Billing & Subscriptions</CardTitle>
            <CardDescription>Managing your subscription and plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Plans</h3>
              <p className="text-sm text-muted-foreground mb-3">
                ZoneMesh offers two subscription plans:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Free Tier</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Limited number of zones, hubs, and targets</li>
                    <li>Basic DNS synchronization features</li>
                    <li>Perfect for testing and small deployments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pro Plan</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Higher limits for zones, hubs, and targets</li>
                    <li>Access to all current features (Route 53 and AXFR support)</li>
                    <li>Early access to GCP and Azure DNS support when available</li>
                    <li>Priority support</li>
                    <li>Monthly or annual billing options</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Managing Your Subscription</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Access billing and subscription management from <strong>Settings → Billing</strong> in the navigation menu.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>View Current Plan:</strong> See your current plan, usage, and limits</li>
                <li><strong>Upgrade to Pro:</strong> Upgrade from Free tier to Pro plan</li>
                <li><strong>Update Payment Method:</strong> Change your payment method for Pro subscriptions</li>
                <li><strong>Unsubscribe:</strong> Cancel your Pro subscription (access continues until the end of the billing period)</li>
                <li><strong>Resubscribe:</strong> Reactivate a canceled subscription</li>
                <li><strong>View Invoices:</strong> Access upcoming invoice previews</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Usage Limits</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Your current usage is displayed on the billing page, showing how many zones, hubs, and targets you're using 
                compared to your plan limits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Usage Tracking:</strong> Real-time usage counts for zones, hubs, and targets</li>
                <li><strong>Limit Warnings:</strong> Notifications when approaching plan limits</li>
                <li><strong>Upgrade Prompts:</strong> Suggestions to upgrade when limits are reached</li>
                <li><strong>Unsubscription Blocking:</strong> If you're using more than free tier limits, you must reduce usage before unsubscribing</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Organization Settings</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Manage your organization settings from <strong>Settings → General</strong> in the navigation menu.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Display Name:</strong> Update your organization's display name</li>
                <li><strong>Delete Organization:</strong> Permanently delete your organization and all associated data</li>
                <li><strong>Note:</strong> You cannot delete an organization with an active subscription. Cancel the subscription first.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting Section */}
        <Card id="troubleshooting">
          <CardHeader>
            <CardTitle>Troubleshooting</CardTitle>
            <CardDescription>Common issues and solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Hub Connection Issues</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-1">Hub shows as "offline"</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Check if the Docker container is running on your server</li>
                    <li>Check container logs for error messages</li>
                    <li>Verify the hub ID and token are correct in your Docker command</li>
                    <li>Ensure the control plane URL is accessible from your hub's network</li>
                    <li>Check firewall rules allow outbound HTTPS connections</li>
                    <li>Use the "Services Test" feature to diagnose hub issues</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Hub connects but immediately disconnects</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Verify the hub token is correct and hasn't been regenerated</li>
                    <li>Check network connectivity to the control plane</li>
                    <li>Review hub container logs for authentication errors</li>
                    <li>Ensure the hub token matches the one shown when you created the hub</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">SSL certificate verification error</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you see SSL certificate errors in your hub logs:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>This typically occurs in development/test environments with self-signed certificates</li>
                    <li>Add <code className="bg-muted px-1 rounded">-e SSL_VERIFY=false</code> to your Docker run command</li>
                    <li><strong>Never disable SSL verification in production</strong> - always use proper SSL certificates</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Zone Sync Failures</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-1">Zone sync fails with credential error</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Verify credentials are correctly configured in Integrations</li>
                    <li>Check credential permissions match requirements</li>
                    <li>For AWS Route 53: Verify IAM user has Route 53 permissions</li>
                    <li>For AXFR: Verify master DNS server allows zone transfers from your hub's IP address</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Zone sync fails with "zone not found"</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Verify zone name matches exactly (case-sensitive)</li>
                    <li>Check source configuration (hosted zone ID, project ID, etc.)</li>
                    <li>Ensure the zone exists in the source DNS provider</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">AXFR transfer fails</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Verify master DNS server IP address is correct</li>
                    <li>Check if TSIG key is required and correctly configured</li>
                    <li>Ensure port 53 TCP is accessible from the hub</li>
                    <li>Verify the master DNS server allows zone transfers from your hub's IP address</li>
                    <li>Check hub logs for specific AXFR error messages</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Target Push Failures</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-1">Target push fails</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Verify target configuration (hosted zone ID, project ID, etc.)</li>
                    <li>Check credential has write permissions</li>
                    <li>Ensure target zone exists in the DNS provider</li>
                    <li>Review hub logs for detailed error messages</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">AXFR secondary cannot pull zone</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Verify AXFR target is configured in the zone</li>
                    <li>Use the "Services Test" feature to verify the hub's DNS server is running</li>
                    <li>Verify port 53 TCP/UDP is accessible from the secondary server</li>
                    <li>Check that the hub's IP address is allowed to transfer zones to the secondary</li>
                    <li>Review hub logs for zone transfer attempts and errors</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Getting Help</h3>
              <p className="text-sm text-muted-foreground mb-3">
                If you're still experiencing issues:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Check hub container logs for detailed error messages</li>
                <li>Review sync status history in the zone detail page (shows last 24 hours)</li>
                <li>Use the "Services Test" feature to verify hub functionality</li>
                <li>Check target status indicators to see which targets are failing</li>
                <li>Verify credentials have the correct permissions for your DNS providers</li>
                <li>Contact support with hub logs, zone configuration, and error details</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices Section */}
        <Card id="best-practices">
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Recommendations for optimal setup</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>Use IAM roles/service accounts with minimal required permissions (read-only for sources, write for targets)</li>
                <li>Rotate credentials regularly for better security</li>
                <li>Use TSIG keys for AXFR transfers when possible to secure zone transfers</li>
                <li>Restrict hub container network access to necessary endpoints only</li>
                <li>Keep hub containers updated using the "Update Software" feature</li>
                <li>Never share hub tokens or credentials</li>
                <li>Use proper SSL certificates in production (never disable SSL verification)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">High Availability</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>Deploy multiple hubs in different regions/availability zones</li>
                <li>Attach zones to multiple hubs for redundancy</li>
                <li>Configure Docker restart policies: <code className="bg-muted px-1 rounded">--restart unless-stopped</code></li>
                <li>Monitor hub status regularly</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Performance</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>Place hubs close to your DNS sources for faster sync times</li>
                <li>Use multiple hubs in different regions to distribute load and improve redundancy</li>
                <li>Monitor sync times in the status history and adjust if needed</li>
                <li>Configure appropriate push retry limits based on your network reliability</li>
                <li>Attach zones to multiple hubs for redundancy and faster synchronization</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
