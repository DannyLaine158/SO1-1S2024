# Iniciar con gRPC

```sudo apt install protobuf-compiler```

## El que quieran. Recomendado fiber
```go get github.com/gofiber/fiber/v2```

```go get google.golang.org/grpc```

```go install google.golang.org/protobuf/cmd/protoc-gen-go@latest```

``` go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest```

## Compilar archivo .proto
```protoc --go_out=. --go-grpc_out=. client.proto```
