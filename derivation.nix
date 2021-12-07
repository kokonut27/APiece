{ lib, python3Packages }:
with python3Packages;
buildPythonApplication {
  pname = "apiece";
  version = "0.0.1";

  propagatedBuildInputs = [ 
    flask
  ];

  src = ./source/apiece/app.py;
}
