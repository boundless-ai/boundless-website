with (import <nixpkgs> {});
mkShell {
  nativeBuildInputs = [
    nodejs-16_x
    nodePackages.npm
    nodePackages.gatsby-cli
  ];
}
