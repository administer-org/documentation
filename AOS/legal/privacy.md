# Privacy Policy

*This privacy policy is up to date as of July 1, 2025. It applies to all official Administer Software operated services (\*.admsoftware.org) and direct, unmodified copies of [AOS](https://to.admsoftware.org/git/app-server). However, individually operated servers and AOS Instances may have different privacy practices and data collection, so generally these terms should not apply.*

## Preamble

Your privacy is of top priority for us which we deliver by minimizing data collection where possible. We only collect data required in order to operate all online-powered features and nothing else. This data is securely stored on several Administer Software-operated MongoDB nodes in the US.

All AOS Source Code is available for review, redistribution, and contribution on [GitHub](https://to.admsoftware.org/git/app-server). This document directly reflects what our backend does and how it interacts with said data.

## You and Administer
When you sign up for or otherwise utilize Administer Software provided services, we collect the following:

- Roblox place ID
- The time that you were added to our database
- Installed Apps and your votes for them, if applicable.
- Primary AOS Instance Node ID

Unless requested otherwise for any reason, we retain said data for as long as required for operating said services. 

AOS collects some analytical data to assist with development efforts which is not optional. However, this data is not associated with you, your AOS Profile, or Roblox Place. When you launch Administer, we will collect the operating Administer version which is stored in aggregate and used to determine when it is safe to remove old API endpoints. Nightly, our system will automatically generate a report of the following information from AOS and share it for review with maintainers:

- Collective version usage
- API Response Count
- Download & Vote Activity

## System Abuse

In order to maintain platform integrity, we log extra data for requests when our system believes you may be engaging in an act of fraud; for example, creating fake places, impersonating a game server, or engaging in other forms of abuse. In such cases, we will log the following information:

- Timestamp
- IP details (country, ISP, IP, proxy information, state/region)
- Attempted Roblox ID
- User-Agent string

This is to ensure we can perform accurate bans against you and our services. This data is only retained for the purpose of enforcing platform rules and is never used for profiling, marketing, or sold to any third party.

**Important:** This data is only collected if abusive behavior is detected. For legitimate usage, such as within Roblox game servers, no IP information is sent to permanent storage. Abusing the service will result in permanent blockage, and such decisions are typically final unless there is compelling evidence of error. If you believe you were wrongly flagged and received a "This incident will be reported" message in error, please [contact us](mailto:abuse-appeals@admsoftware.org) to resolve the issue and remove your information from our logs. If you do not receive a reply within 2-4 business days, your appeal was denied and you should not attempt to reach out again.

### Database abuse

Attempts to connect directly to any Administer database nodes are blocked and logged accordingly. If any Administer Software staff (system administrators, database administrators, developers) or automated systems (Proxmox Firewall, ufw, Unifi, ...) detects abuse, we will make note of the following:

- Your IP
- mongo-collected logging information (information on your system and connection method)

After said attacks are finished, if we find they are being made in a repeated manner we make abuse reports to your ISP or cloud provider who typically block you from said service.

## You and third parties
We do not sell, share, or otherwise distribute your data or analytics. This will never change. Your data is kept privately on bare metal Administer Software dedicated servers and is not given or shown to anybody. Our stance on AI training is very similar. We have a zero-tolerance policy on disclosing any user data to 3rd parties for any reason.  

## Logs
When a request is made, we log the IP, Roblox place ID (if any), timestamp, request method, status code, server processing time, and any other request-specific logs for debugging purposes. The logs are purged weekly at midnight and are generally not read unless there is a service disruption caused by the backend code, at which point they are lost forever. We cannot recover purged logs.

## Analytics

We use a self-hosted [Plausible CE](https://plausible.io) instance for collecting the URLs which are accessed the most over our AOS Nodes. Like version collecting, this cannot be opted out of because it is collected at a system level. Your Place ID is forwarded in the User-Agent header, but we cannot read it on our dashboard to ensure your privacy is maintained. All we know is what endpoints are being hit and how often, not by who or for what purpose.

## European Rights (GDPR)

Administer operates under United States governing law. All user and application data is stored on machines in the US. 

Despite our United States governing law, we offer fundamental GDPR rights to users worldwide including the right to Access, Delete, or Rectify your data on our services. If you would like to file a GDPR request, then please email us at [gdpr@admsoftware.org](mailto:gdpr@admsoftware.org).

### Changes to this document

Sometimes to allow for new features, we may opt to make changes to this policy. When changes occur, you will be notified via the Discord server, core panel (if it's a significant change), and other appropriate channels. Continued usage of Administer services is considered acceptance of new or updated terms.
