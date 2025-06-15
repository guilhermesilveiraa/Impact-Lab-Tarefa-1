cmake_minimum_required(VERSION 3.10)
project(cpp-api)

set(CMAKE_CXX_STANDARD 17)
include_directories(
  external/crow/include
  external/asio
)



add_executable(cpp-api main.cpp)
