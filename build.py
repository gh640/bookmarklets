# coding: utf-8

'''Converts bookmarklets in src/.

Python >= 3.5 is required.
'''

from pathlib import Path
import subprocess


def main():
    cd = Path('.')
    dir_src = cd / 'src'
    dir_dist = cd / 'dist'

    make_dir_if_not_exists(dir_dist)
    run_conversion(get_conversion_list(dir_src, dir_dist))


def make_dir_if_not_exists(dir: Path):
    if not dir.is_dir():
        dir.mkdir(0o744)


def get_conversion_list(dir_src: Path, dir_dist) -> list:
    pairs = []
    for file in dir_src.iterdir():
        if file.is_file() and file.suffix == '.js':
            file_converted = get_converted_name(file, dir_dist)
            pairs.append((str(file), file_converted))

    return pairs


def run_conversion(conversion_list: list):
    cmd = 'node_modules/.bin/bookmarklet'
    for original, converted in conversion_list:
        subprocess.run([cmd, original, converted])
        print('converted: {} -> {}'.format(original, converted))


def get_converted_name(original: Path, dir_dist: Path) -> str:
    name_dist = original.with_suffix('.txt').name
    return str(dir_dist / name_dist)


if __name__ == '__main__':
    main()
