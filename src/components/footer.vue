<template>
  <footer class="footer-wrapper">
    <div class="footer-inner container">
      <div class="footer-top">
        <div class="logo-section">
          <Icon name="image 2.svg" size="28" />
          <img src="@/assets/image/icons/icon-logo.svg" alt="MYWOO買屋網" class="logo" />
        </div>
        <ul class="nav-section">
          <li><a href="">關於買屋網</a></li>
          <li><a href="">物件列表</a></li>
          <li><a href="">房產大小事</a></li>
          <li><a href="">最新消息</a></li>
          <li><a href="">常見問題&emsp; </a></li>
          <li><a href="">業務型象</a></li>
          <li><a href="">跟隨我們</a></li>
        </ul>
      </div>

      <div class="font-content">
        <div class="footer-warning">
          <strong>警語及免責聲明</strong>
          <p>
            本網站僅提供刊登的媒介，不應以此作為投資或購買房屋依據，請務必謹慎評估，本網站不對使用者負任何瑕疵擔保及買賣盈虧責任。本站案件內容若有遗识，概以拍賣執行單位公告為準。
          </p>
        </div>
        <div class="contact-group">
          <div class="phone">
            <img src="@/assets/image/icons/Group 9.svg" alt="phone" />
            <a href="tel:0911151441" class="phone-button">
              0911-151441
            </a>
          </div>
          <div class="socials">
            <a href="" target="_blank">
              <img src="@/assets/image/icons/Group 40.svg" alt="line" />
            </a>
            <a href="" target="_blank">
              <img src="@/assets/image/icons/Group 36.svg" alt="facebook" />
            </a>
            <a href="" target="_blank">
              <img src="@/assets/image/icons/Group 39.svg" alt="youtube" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        「透明房訊雜誌社 / 一零四法拍網股份有限公司 / 行情通實價網雜誌社 / 一零四高欣仲介經紀有限公司 / 愛上法拍屋資訊股份有限公司 / 一零四安鑫仲介經紀有限公司」共同創設之版權所有。
        <a href="#">免責聲明</a><a href="#">隱私權政策</a> 版權 © 1986-2024 買屋網-便宜中古屋
      </div>
    </div>
    <p class="border1"></p>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: underline;
}

.footer-wrapper {
  background: #535353;
  color: #fff;
  height: 295px;
  padding-top: 32px;
  box-sizing: border-box;
  position: relative;

  .footer-top {
    display: flex;
    gap: 77px;

    .nav-section {
      display: flex;
      gap: 50px;

      li {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
      }

    }
  }

  .font-content {
    display: flex;
    margin-top: 24px;

    .footer-warning {
      font-size: 16px;
      width: 578px;

      p {
        font-size: 12px;
        margin-top: 10px;
        line-height: 18px;
      }

      strong {
        display: block;
        font-weight: bold;
      }
    }

    .contact-group {
      margin-left: 363px;

      .phone {
        img {
          width: 16px;
          vertical-align: text-bottom;
        }

        background-color: #0071ce;
        border-radius: 3px;
        width: 134px;
        height: 29px;
        line-height: 29px;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
      }

      .socials {
        display: flex;
        gap: 12px;
        margin: 12px 0 28px 0;

        a {
          display: inline-block;
          height: 32px;
        }

        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  p.border1 {
    border-top: 1px solid #858585 !important;
    position: absolute;
    bottom: 87px;
    left: 0;
    width: 100%;
  }

  .footer-bottom {
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    text-align: center;
    padding: 28px 107px 0 80px;

    a {
      color: #fff;
      text-decoration: underline;
    }

    a:last-child {
      margin: 0 12px 0 3px;
    }
  }
}

@media (max-width: 750px) {
  .footer-wrapper {
    min-width: auto;
    height: auto;
    padding-top: 0.36rem;

    .logo {
      width: 2.4rem;
      height: 0.79rem;
    }

    .footer-top {
      padding: 0 0.24rem;
      flex-direction: column;
      gap: 0;

      .nav-section {
        flex-wrap: wrap;
        gap: 0;
        margin-top: 0.5rem;

        a {
          display: inline-block;
          font-size: 0.24rem;
          margin-right: 0.53rem;
          margin-bottom: 0.28rem;
        }
      }
    }

    .font-content {
      flex-direction: column-reverse;
      margin: unset;
    }

    .font-content {
      padding: 0 0.24rem;

      .footer-warning {
        margin: 0.32rem 0;
        width: unset;
      }

      .contact-group {
        margin: unset;
        margin-left: auto;
        margin-top: -0.7rem;

        .phone {
          font-size: 0.24rem;
          font-weight: bold;
          width: 2.1rem;
          height: unset;
        }

        .socials {
          margin: unset;
          gap: 0.13rem;
          margin-top: 0.16rem;

          a {
            height: 0.6rem;
            display: flex;

            img {
              height: 0.6rem;
              width: 0.6rem;
            }
          }
        }
      }
    }

    .border {
      display: none;
    }

    .footer-bottom {
      border-top: 1px solid #858585;
      text-align: center;
      padding: 0.32rem 0.24rem;
    }
  }
}
</style>
