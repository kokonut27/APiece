{ pkgs }: {
    deps = [
        pkgs.python38
        pkgs.python38Packages.flask
        pkgs.python38Packages.requests
    ];
}
