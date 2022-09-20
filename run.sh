./build.sh

cd build/gen && gunicorn -b 0.0.0.0:5000 --workers 4 --threads 20 server:app