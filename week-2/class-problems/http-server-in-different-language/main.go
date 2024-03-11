package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello from Go with Gorilla Mux!\n")
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", handler)

	PORT := 3000
	fmt.Printf("Server running at http://localhost:%d/\n", PORT)
	http.Handle("/", r)
	http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil)
}