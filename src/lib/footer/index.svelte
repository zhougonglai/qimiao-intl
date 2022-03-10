<footer class="flex justify-center">
	<div class="block flex flex-wrap">
		<div class="contact">
			<div class="tile relative divier">联系我们</div>
			<ul>
				<li>
					<a role="button" href="/">关于我们</a>
				</li>
			</ul>
		</div>

		<div class="service">
			<div class="tile relative divier">服务中心</div>
			<ul>
				<li>
					<a role="button" href="/"> 用户协议 </a>
				</li>
				<li>
					<a role="button" href="/"> 隐私协议 </a>
				</li>
			</ul>
		</div>

		<div class="links">
			<div class="tile">友情链接</div>
		</div>

		<div class="about">
			<div class="tile">关于我们</div>
		</div>

		<div class="social">
			<div class="tile">社交Q群</div>
			<div class="text-sm leading-relaxed">QQ交流群①：859323666</div>
			<div class="text-sm leading-relaxed">QQ交流群②：877040971</div>
		</div>

		<div class="flex mt-4">
			<div class="address inline-flex flex-wrap flex-1 leading-relaxed">
				<div>增值电信业务经营许可证:鄂B2-20200164 - &nbsp;</div>
				<div>国内互联网虚拟专用网业务,内容分发网络业务:B1-20191807</div>
				<div class="w-full">
					详细地址:
					湖北省武汉市东湖新技术开发区华师园北路18号光谷科技港1栋B座6层6153室
				</div>
				<div class="w-full">
					版本: v2.0 - &nbsp;开发者: 武汉奇妙科技有限公司
				</div>

				<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
					>鄂ICP备18012317号-2
				</a>

				<a
					href="http://www.beian.gov.cn/portal/registerSystemInfo"
					target="_blank"
					class="ml-4 flex items-center justify-center"
				>
					<img
						src="/static/img/footer-gonganbeian.png"
						width="20"
						alt="公安备案"
						class="inline mr-2"
					/>
					鄂公网安备 42018502003205号
				</a>
			</div>

			<div class="brand inline-flex gap-x-4 items-center pl-4">
				<a
					id="_pingansec_bottomimagesmall_brand"
					class="flex-1"
					target="_blank"
					href="//si.trustutn.org/info?sn=497220308040927482790&amp;certType=1"
				>
					<img
						src="//v.trustutn.org/images/cert/brand_bottom_small.jpg"
						alt="水滴信用"
					/>
				</a>

				<a
					class="flex-1"
					target="_blank"
					href="https://v.yunaq.com/certificate?domain=www.qimiao.com&amp;from=label&amp;code=90030"
				>
					<img
						src="https://aqyzmedia.yunaq.com/labels/label_sm_90030.png"
						alt="行业认证"
					/></a
				>

				<a
					class="flex-1"
					target="_blank"
					href="https://v.pinpaibao.com.cn/cert/site/?site=www.qimiao.com&amp;at=business"
					one-link-mark="yes"
				>
					<img
						src="https://static.anquan.org/static/outer/image/aqkx_124x47.png"
						alt="全国安全可信网站"
					/>
				</a>
			</div>
		</div>
	</div>
</footer>

<style lang="scss" scoped>
	footer {
		background-color: var(--primary-color);
		min-height: 260px;
		padding: 40px;

		.block {
			width: 1200px;
			color: white;

			ul li {
				font-size: smaller;
				line-height: 30px;
				a:link {
					color: var(--white-op);
					display: block;
					&:hover {
						color: var(--white);
					}
				}
			}
		}

		.contact {
			width: 160px;
		}

		.service {
			width: 160px;
			text-align: center;
		}

		.links {
			width: 400px;
			.tile {
				text-indent: 50px;
			}
		}

		.about {
			width: 300px;
		}

		.social {
			width: 180px;
			text-align: center;
		}

		.address {
			font-size: smaller;
			a {
				color: var(--white) !important;
			}
		}

		.brand {
		}

		.tile {
			line-height: 40px;
			font-size: large;
			&.divier {
				&::after {
					content: '';
					position: absolute;
					right: 0;
					bottom: calc(50% - 10px);
					height: 20px;
					width: 1px;
					background-color: #ffffff80;
				}
			}
		}
	}
</style>
