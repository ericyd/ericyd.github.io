# Setting up Github, Google Domains, and Zoho

Documenting in case I ever need to do this again.

1. On Github, Create repo to use with github pages, e.g. `ericyd.github.io`
2. On Github, Add file `CNAME` with desired domain name
3. In [Google Domains](https://domains.google.com), set everything to use Google nameservers if not already. Remove any email forwarding MX records (sometimes under the Synthetic records section)
4. In [Google Domains](https://domains.google.com), add custom records for `A`, `CNAME` and `MX` types to match below

| Name            | Type  | TTL | Data
| ----------------|-------|-----|------------
| @               |A      | 1h  | 192.30.252.153
|                 |       |     | 192.30.252.154
|                 |       |     | 185.199.108.153
|                 |       |     | 185.199.109.153
|                 |       |     | 185.199.110.153
|                 |       |     | 185.199.111.153
| @               |MX     | 1h  | 10 mx.zoho.com.
|                 |       |     | 20 mx2.zoho.com.
| www             |CNAME  | 1h  | ericyd.com.

5. Follow [Zoho documentation](https://www.zoho.com/mail/help/email-hosting-with-zoho.html) to set up the mail correctly
6. Should be all good to go. Use this command to verify things are set up properly
7. If things aren't working, it might take up to 24 hours to update the DNS records.

```bash
dig +noall +answer ericyd.com
;ericyd.com.
ericyd.com.   73  IN  A 192.30.252.153
ericyd.com.   73  IN  A 192.30.252.154
ericyd.com.   73  IN  A 185.199.108.153
ericyd.com.   73  IN  A 185.199.109.153
ericyd.com.   73  IN  A 185.199.110.153
ericyd.com.   73  IN  A 185.199.111.153
```

You want the Github records to match the Google DNS records
```bash
dig +noall +answer ericyd.github.io
;ericyd.com.
ericyd.github.io.   73  IN  A 192.30.252.153
ericyd.github.io.   73  IN  A 192.30.252.154
ericyd.github.io.   73  IN  A 185.199.108.153
ericyd.github.io.   73  IN  A 185.199.109.153
ericyd.github.io.   73  IN  A 185.199.110.153
ericyd.github.io.   73  IN  A 185.199.111.153
```
