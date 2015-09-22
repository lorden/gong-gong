package main

import (
    "github.com/go-martini/martini"
    "os/exec"
)

func main() {
  m := martini.Classic()
  m.Post("/gong", func() string {
    cmd := exec.Command("sh", "gong.py")
    stdout, err := cmd.Output()
    if err != nil {
        return string(err.Error())
    } else {
        return string(stdout)
    }
  })
  m.Run()
}
