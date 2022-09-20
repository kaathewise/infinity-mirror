./build_proto.sh

mkdir -p build/
rm -R build/gen

cp -r src/python build/gen
mkdir -p build/gen/static
cp -r src/js build/gen/static
cp -r src/proto build/gen/static/proto