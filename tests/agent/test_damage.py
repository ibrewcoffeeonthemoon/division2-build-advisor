import pytest

from agent import *
from tests.builds import build_creators, build_result_handlers, build_results


@pytest.mark.parametrize('build', build_creators, indirect=True)
@pytest.mark.parametrize('result', build_results)
@pytest.mark.parametrize('result_handler', build_result_handlers)
@pytest.mark.parametrize('weapon_id', [0, 1])
def test_computer_graph_manager_creation(
    build: Build,
    result: str,
    result_handler: str,
    weapon_id: int,
):
    build0 = build
    build1 = build.copy()
    r0 = getattr(build0, result)
    r1 = getattr(build1, result)
    h0 = getattr(r0, result_handler)
    h1 = getattr(r1, result_handler)
    m0 = h0._managers[weapon_id]
    m1 = h1._managers[weapon_id]
    h0()
    h1()
    n0 = m0._nodes
    n1 = m1._nodes
    # copy create different build object
    assert id(build0) != id(build1)
    # copy create unique graph manager
    assert id(m0) != id(m1)
    # call property again use cached version of the manager
    assert id(r0) == id(getattr(build0, result))
    assert id(r1) == id(getattr(build1, result))
    assert id(h0) == id(getattr(r0, result_handler))
    assert id(h1) == id(getattr(r1, result_handler))
    assert id(m0) == id(getattr(getattr(build0, result), result_handler)._managers[weapon_id])
    assert id(m1) == id(getattr(getattr(build1, result), result_handler)._managers[weapon_id])
    # a copy of build should produce the same result, but object id different
    # different nodes dict
    assert id(n0) != id(n1)
    # same len
    assert len(n0) == len(n1)
    for (ka, va), (kb, vb) in zip(n0.items(), n1.items()):
        # different _Attribute object
        assert id(ka) != id(kb)
        # but with the same class name
        assert ka.__class__.__name__ == kb.__class__.__name__
        # different node object
        assert id(va) != id(vb)
        # different tensor object but same value
        assert id(va.value) != id(vb.value)
        assert va.value.item() == vb.value.item()
        # different tensor object but same value
        assert id(va.expected_value) != id(vb.expected_value)
        assert va.expected_value.item() == vb.expected_value.item()
