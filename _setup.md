# Setting up Github, Google Domains, and Zoho

Documenting in case I ever need to do this again.

1. On Github, Create repo to use with github pages, e.g. `ericyd.github.io`
2. On Github, Add file `CNAME` with desired domain name
3. In [Google Domains](https://domains.google.com), set everything to use Google nameservers if not already
4. In [Google Domains](https://domains.google.com), add custom records for `A` and `MX` types to match below

Name            | Type  | TTL | Data
----------------|-------|-----|------------
@               |A      | 1h  | 192.30.252.153
@               |       |     | 192.30.252.154
eric@ericyd.com |MX     | 1m  | 10 mx.zoho.com.
eric@ericyd.com |       |     | 20 mx2.zoho.com.

5. Follow [Zoho documentation](https://www.zoho.com/mail/help/email-hosting-with-zoho.html) to set up the mail correctly
6. Should be all good to go. Use this command to verify things are set up properly
7. If things aren't working, it might take up to 24 hours to update the DNS records.

```bash
dig +noall +answer example.com
;example.com.
example.com.   73  IN  A 192.30.252.153
example.com.   73  IN  A 192.30.252.154
```
