"""from setuptools import setup

with open("README.md", "r") as fh:
  long_description = fh.read()

setup(
  name = "apiece",
  install_requires=[
    'flask'
        # other requirements
  ],
  version = "0.0.1",
  description = "The app that connects all the social media apps together.",
  long_description = long_description,
  long_description_content_type = "text/markdown",
  url = "https://github.com/JBYT27/aPiece",
  author = "JBYT27",
  author_email = "beol0127@gmail.com",
#To find more licenses or classifiers go to: https://pypi.org/classifiers/
  license = "Apache License v2.0",
  packages=['apiece'],
  classifiers = [
  "Programming Language :: Python :: 3",
  "License :: OSI Approved :: Apache License, version 2.0",
  "Operating System :: OS Independent",
],
  zip_safe=True,
  python_requires = ">=3.6",
)"""

from setuptools import setup, find_packages

setup(name='apiece',
      version='0.0.1',
      # Modules to import from other scripts:
      packages=find_packages(),
      # Executables
      scripts=["app.py"],
     )