from itertools import zip_longest


def merge_text_side_by_side(*texts: str, sep: str = ' ') -> str:
    if len(texts) == 0:
        return ''

    if len(texts) == 1:
        return texts[0]

    def merge_two_texts(txt1: str, txt2: str) -> str:
        lines1 = txt1.splitlines()
        lines2 = txt2.splitlines()

        max_len1 = max(len(line) for line in lines1)

        data = zip_longest(lines1, lines2, fillvalue='')

        t = ''
        for row in data:
            left, right = row
            t += f'{left:<{max_len1}}{sep}{right}\n'

        return t.strip()

    first_two = merge_two_texts(texts[0], texts[1])

    if len(texts) == 2:
        return first_two

    # recursion
    return merge_text_side_by_side(first_two, *texts[2:])
