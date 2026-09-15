from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components


BASE_DIR = Path(__file__).resolve().parent
web_DIR = BASE_DIR 


def load_text(filename: str) -> str:
    return (WEB_DIR / filename).read_text(encoding="utf-8")


def build_animation_page() -> str:
    """기존 웹 앱의 CSS와 JavaScript를 한 HTML 문서 안에 넣는다."""
    html = load_text("index.html")

    css = "\n".join(
        [
            load_text("styles.css"),
            load_text("cinema.css"),
            load_text("treatment-lab.css"),
        ]
    )

    javascript = "\n".join(
        [
            load_text("app.js"),
            load_text("cinema.js"),
            load_text("treatment-lab.js"),
        ]
    )

    html = html.replace(
        '<link rel="stylesheet" href="styles.css" />', ""
    )
    html = html.replace(
        '<link rel="stylesheet" href="cinema.css?v=3" />', ""
    )
    html = html.replace(
        '<link rel="stylesheet" href="treatment-lab.css?v=1" />', ""
    )
    html = html.replace('<script src="app.js"></script>', "")
    html = html.replace('<script src="cinema.js?v=3"></script>', "")
    html = html.replace(
        '<script src="treatment-lab.js?v=1"></script>', ""
    )

    html = html.replace("</head>", f"<style>{css}</style></head>")
    html = html.replace("</body>", f"<script>{javascript}</script></body>")
    return html


st.set_page_config(
    page_title="감염 및 치료 기전 비교",
    page_icon="🧬",
    layout="wide",
)

st.title("감염 및 치료 기전 비교 시뮬레이션")
st.caption(
    "파이썬 Streamlit이 기존 HTML Canvas 애니메이션을 불러온 융합형 앱입니다."
)

try:
    animation_page = build_animation_page()
    components.html(animation_page, height=5200, scrolling=True)
except FileNotFoundError as error:
    st.error(f"필요한 애니메이션 파일을 찾지 못했습니다: {error.filename}")
    st.info("web 폴더를 app.py와 같은 폴더 안에 두었는지 확인하세요.")

