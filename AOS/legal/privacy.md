# Privacy Policy

*This privacy policy is up to date as of July 1, 2025. It applies to all official Administer services (\*.admsoftware.org) and direct, unmodified copies of [AOS](https://to.admsoftware.org/git/app-server). Individually operated servers may have different privacy practices and generally these terms should not apply.*

## Preamble

Your privacy is of top priority for us which we deliver by minimizing data collection where possible. We only collect data required in order to operate all online-powered features and nothing else. This data is securely stored on several Administer Software-operated MongoDB nodes around the world.

## You and Administer
When you sign up for Administer services, we collect the following:

- Your Roblox place ID
- The time that you were added to our database to assist with fraud detection.
- The apps you have installed, in order to provide app votes.
- The votes you have submitted through the panel.

We collect some analytical data which cannot be opted out of. However, this data is **only in aggregate**, therefore we do not know how much your individual game uses Administer services. From your game we only directly collect your Administer version. However, our internal tools collect all of the following aggregated information:

- Administer version
- Total amount of successful API responses
- Number of app downloads and votes

Your place object is retained indefinitely unless you request its removal for any reason.

## Abuse Logging

In order to maintain platform integrity, we log extra data for requests when our system believes you may be engaging in an act of fraud; for example, creating fake places, impersonating a game server, or engaging in other forms of abuse. In such cases, we will log the following information:

- Timestamp
- IP details (country, ISP, IP, proxy information, state/region)
- Attempted Roblox ID
- User-Agent string

This is to ensure we can perform accurate bans against you and our services.

**Important:** This data is only collected if abusive behavior is detected. For legitimate usage, such as within Roblox game servers, no IP information is sent to permanent storage. Abusing the service will result in permanent blockage, and such decisions are typically final unless there is compelling evidence of error. If you believe you were wrongly flagged and received a "This incident will be reported" message in error, please [contact us](mailto:abuse-appeals@admsoftware.org) to resolve the issue and remove your information from our logs.

### Database abuse

Attempts to connect directly to any Administer database nodes are blocked and logged accordingly. If any Administer Software staff (system administrators, database administrators, developers) or automated systems (Proxmox Firewall, ufw, Unifi, ...) detects abuse, we will make note of the following:

- Your IP
- mongo-collected logging information (information on your system and connection method)

After said attacks are finished, if we find they are being made in a repeated manner we make abuse reports to your ISP or cloud provider who typically block you from said service.

## You and third parties
We do not sell, share, or otherwise distribute your data or analytics. This will never change. Your data is kept privately on bare metal Administer Software dedicated servers and is not given or shown to anybody. 

## Logs
When a request is made, we log the IP, Roblox place ID (if any), timestamp, request method, status code, server processing time, and any other request-specific logs for debugging purposes. The logs are purged weekly at midnight and are generally not read unless there is a service disruption caused by the backend code, at which point they are lost forever. We cannot recover purged logs.

## Analytics

We use a self-hosted [Plausible CE](https://plausibe.io) instance for collecting the URLs which are accessed the most over our AOS Nodes. Like version collecting, this cannot be opted out of because it is collected at a system level. Your Place ID is forwarded in the User-Agent header, but we cannot read it on our dashboard to ensure your privacy is maintained. All we know is what endpoints are being hit and how often, not by who or for what purpose.

## European Rights (GDPR)

Administer operates under United States governing law. All user and application data is stored on machines in the US. 

However, we provide basic GDPR rights **worldwide**. If you would like to be forgotten, access your data, or modify it, please email our GDPR address: [gdpr@admsoftware.org](mailto:gdpr@admsoftware.org).

### Changes to this document

Sometimes to allow for new features, we may opt to make changes to this policy. When changes occur, you will be notified via the Discord server, core panel (if it's a significant change), and other appropriate channels.
