# OruxMaps

**OruxMaps**可以查看在线、离线地图，可以查看导入的轨迹文件，可以利用手机的各类传感器记录轨迹信息，以供后期使用。

本章主要介绍猫盟野外调查工作中需要用到的基础功能，包括：离线地图、轨迹跟踪、轨迹记录、点位标记等。此外OruxMaps还有许多高级功能，可访问[官方文档](http://www.oruxmaps.com/oruxmapsmanual_zh.pdf "OruxMaps中文文档")查看。

## 下载

OruxMaps可以从官网下载点下载，目前（2017年9月6日）版本为`v.7.1.4`。若您发现了新版本，可[通知作者](https://github.com/konrumi/field-investigation-startup/issues/new "提出Issues")更新此文章。

- [官网下载地址](http://www.oruxmaps.com/OruxMaps7.1.4.apk "OruxMaps v.7.1.4 官网下载")
- [百度网盘下载地址](https://pan.baidu.com/s/1ge2t6mv "OruxMaps v.7.1.4 百度网盘下载") // 密码: `akk9`

## 基础功能

// TODO

## 离线地图下载

在野外调查时，难免会进入没有信号的地区，因此推荐预先安装不依赖网络的离线地图。

OruxMaps官网提供了许多地图来源，可参见[地图下载页](http://www.oruxmaps.com/cs/en/maps "OruxMaps地图下载")。本书中，推荐[OpenAndroMaps](https://www.openandromaps.org/en/downloads "OpenAndroMaps")提供的矢量离线地图。当然。您也可以根据需求与喜好自行选择。

> OpenAndroMaps地图的优势：
> - 包含中国地区；
> - 适量地图，支持放大查看细节；
> - 带有等高线，支持查看地形；
> - 支持多语言，带有中文地名；

离线地图的安装方法主要有两种—— **在APP中下载安装离线地图** 、 **在PC下载离线地图传至手机安装** 。

### 在APP中下载安装离线地图

在OruxMaps App内，可直接下载OpenAndroMaps地图。但是由于各种原因，如果下载失败，清尝试通过PC下载。

![在APP中下载安装离线地图](../asset/map-tools/download-map-via-app-00.png)
点击右上角的 **地图** 按钮，在弹出菜单中，选择 **切换地图** 。

![在APP中下载安装离线地图](../asset/map-tools/download-map-via-app-01.png)
点击右上角的 **⊕（添加）** 按钮。

![在APP中下载安装离线地图](../asset/map-tools/download-map-via-app-02.png)
在最后的 **World** 中，选择 **OpenAndroMaps** 。

选择后，将进入APP浏览器访问OpenAndroMaps网站。用户需要分别下载 **主题文件** 与 **地图文件** 。后续的步骤与PC下载类似，因此请参考下面的PC教程。

### 在PC下载离线地图传至手机安装

为正确显示等高线等信息，需下载配套的 **主题文件：Elevate** 。

访问 **[OpenAndroMaps官网](https://www.openandromaps.org/en/downloads "OpenAndroMaps")** 。

![在PC下载离线地图传至手机安装](../asset/map-tools/download-map-via-pc-00.png)
通过首页入口或直接访问[网址](https://www.openandromaps.org/en/legend/elevate-mountain-hike-theme "Elevate下载")，进入Elevate主题文件下载页。

![在PC下载离线地图传至手机安装](../asset/map-tools/download-map-via-pc-01.png)
若希望使用App安装，点击左侧的 **OruxMaps** ；若希望在PC下载，点击右侧的 **Normal Version** 。

若在App内下载，则安装应该能够完成。若正常下载，则您应当得到一个Zip压缩包。

解压缩后，将得到的文件存入手机的 `../oruxmaps/mapstyles/` 目录下即可。