from typing import Callable, Optional

import pytest

from agent import *


@pytest.fixture
def build(request) -> Build:
    create: Callable[[str | None], Build] = request.param
    return create(None)
