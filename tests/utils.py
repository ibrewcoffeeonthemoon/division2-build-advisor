from datetime import datetime
from pathlib import Path
from typing import Any

from _pytest.capture import CaptureResult


def log_test_output(
    log_file: Path,
    captured: CaptureResult[str],
    **test_params: Any,
) -> None:

    header = f'[{datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")}]\n'
    header += ', '.join([f'{k}=`{v}`' for k, v in test_params.items()])

    with open(log_file, "a", encoding="utf-8") as f:
        f.write("\n" + "=" * 80 + "\n")
        f.write(header + "\n")
        f.write("=" * 80 + "\n")
        f.write(captured.out)
        f.write("\n")
