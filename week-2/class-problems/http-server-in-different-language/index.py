from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer


class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        super().do_GET()
        self.wfile.write(b"Hello from Python!\n")


if __name__ == "__main__":
    PORT = 3000
    with TCPServer(("", PORT), MyHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        httpd.serve_forever()

# python index.py
