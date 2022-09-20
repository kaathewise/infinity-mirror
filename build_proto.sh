rm src/python/proto/*
touch src/python/proto/__init__.py
protoc --python_out=src/python/proto --proto_path=src/proto src/proto/*