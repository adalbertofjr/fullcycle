FROM golang:1.17-alpine as builder

WORKDIR /usr/local/go/src/main
COPY main.go .
RUN go build main.go

FROM scratch

WORKDIR /usr/bin
COPY --from=builder /usr/local/go/src/main .
CMD ["./main"] --v
