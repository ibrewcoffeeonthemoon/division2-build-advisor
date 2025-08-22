from itertools import zip_longest


def merge_text_side_by_side(
    txt1: str,
    txt2: str,
) -> str:
    lines1 = txt1.splitlines()
    lines2 = txt2.splitlines()

    max_len1 = max(len(line) for line in lines1)

    data = zip_longest(lines1, lines2, fillvalue='')

    t = ''
    for row in data:
        left, right = row
        t += f'{left:<{max_len1}}\t{right}\n'

    return t.strip()
