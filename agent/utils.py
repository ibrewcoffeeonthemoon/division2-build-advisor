from itertools import zip_longest


def merge_text_side_by_side(*texts: str, sep: str = ' ') -> str:
    if len(texts) == 0:
        return ''

    if len(texts) == 1:
        return texts[0]

    lines0 = texts[0].splitlines()
    lines1 = texts[1].splitlines()
    maxlen0 = max(len(l) for l in lines0)
    maxlen1 = max(len(l) for l in lines1)
    merged = ''
    for left, right in zip_longest(lines0, lines1, fillvalue=''):
        merged += f'{left:<{maxlen0}}{sep}{right:<{maxlen1}}\n'

    if len(texts) == 2:
        return merged

    # recursion
    return merge_text_side_by_side(merged, *texts[2:])
