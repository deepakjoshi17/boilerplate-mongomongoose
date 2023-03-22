{ pkgs }: {
	deps = [
		pkgs.nodejs
  pkgs.iproute2
  pkgs.who
  pkgs.addr
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}