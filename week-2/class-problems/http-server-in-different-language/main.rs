use actix_web::{web, App, HttpServer, Responder};

async fn index() -> impl Responder {
    "Hello from Rust with Actix!\n"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new().service(web::resource("/").to(index))
    })
    .bind("127.0.0.1:3000")?
    .run()
    .await
}
// cargo run