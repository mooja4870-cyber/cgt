import http.server, socketserver, os

ASSETS = "/Users/l/project/CGT/app/src/main/assets"
OUT = "/Users/l/project/CGT/store-assets"

class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ASSETS, **kw)
    def do_GET(self):
        if self.path.startswith("/calc_scrolled.html"):
            with open(os.path.join(OUT, "calc_scrolled.html"), "rb") as f:
                body = f.read()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        else:
            super().do_GET()
    def log_message(self, *a): pass

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", 8123), H) as httpd:
    httpd.serve_forever()
