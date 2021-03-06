# 奥维互动地图

**奥维互动地图** 为一款国产地图App，支持 `iOS` 及 `Android` 平台，具有简单易用的优点，目前基础功能可免费使用。

## 获取App

- `iOS` 客户端

  直接访问[App Store](https://itunes.apple.com/cn/app/ao-wei-hu-dong-de-tu-liu-lan-qi/id505884327 "奥维互动地图iOS")下载安装即可。

- `Android` 客户端

  访问各大应用市场，搜索 **奥维** 下载安装即可。

  亦可访问[官网下载页面](http://www.ovital.com/download/ "奥维互动地图官网下载")，下载安装文件进行安装。

---

## 基础功能

首先，需对奥维互动地图的面板和基础功能进行介绍。

![基础功能](../asset/map-tools/ovital/common-00.png)

### ① 顶部菜单

用于搜索/探索当前地图中的内容。

### ② 左侧菜单

从上到下依次是：

1. **GPS功能** ：设置GPS功能，记录航迹等；
2. **3D** ：开启3D功能（需要高级会员）；
3. **清除** ：清除在地图上绘制的图形等；

### ③ 右侧菜单

从上到下依次是：

1. **地图选择** ：选择要展示的地图；
2. **全屏** ：切换显示/隐藏顶部和底部的菜单；
3. **放大/缩小** ：放大缩小地图；

### ④ 底部菜单

从左到右依次是：

1. **定位** ：返回当前GPS定位的位置；
2. **编辑** ：通过App提供的工具，在地图上绘制图形；
3. **收藏** ：查看/管理航迹、路点；
4. **我在这** ：分享用户当前位置；
5. **更多** ：展开App更多菜单；

---

## 地图

奥维互动地图提供多种在线地图可供选择，用户可根据需求选择自己希望的地图进行查看。

### 选择地图

点击App底部菜单的 **更多** 按钮。或直接点击页面右侧快捷入口处的 **选择地图** 按钮，直接进入选择地图界面。

![选择地图](../asset/map-tools/ovital/select-map-00.png)

在更多界面，选择 **选择地图** 选项。

![选择地图](../asset/map-tools/ovital/select-map-01.png)

在选择地图界面，选择希望显示的地图即可。

![选择地图](../asset/map-tools/ovital/select-map-02.png)

---

### 离线存储地图图块

在野外调查中，时常遇到没有信号的情况，因此我们也可以预先下载地图图块，作为离线地图。

点击App底部菜单的 **更多** 按钮。

![离线存储地图图块](../asset/map-tools/ovital/download-map-00.png)

在更多界面，选择 **下载地图** 选项。

![离线存储地图图块](../asset/map-tools/ovital/download-map-01.png)

在下载地图界面，选择 **选择** 按钮，以选择需要下载图块的区域。

![离线存储地图图块](../asset/map-tools/ovital/download-map-02.png)

勾选所需要下载的地图区域后，点击右上角的 **确定** 按钮。

![离线存储地图图块](../asset/map-tools/ovital/download-map-03.png)

确认其他下载选项后，点击右上角的 **下载** 按钮。

> - 地图类型：选择需要下载的地图。
> - 地图级别：选择需要下载的地图图层粒度。数字越大，粒度越细，地图细节越好，需要下载的图片也就越多。
> - 系统区域：选择郊区是否以选择的地图级别下载。野外调查的目标区域通常为非城镇区域，建议选择 **郊区同市区一样处理** 。

![离线存储地图图块](../asset/map-tools/ovital/download-map-04.png)

点击后，App会弹出授权确认窗口，选择 **我已获得授权** 即可。

![离线存储地图图块](../asset/map-tools/ovital/download-map-05.png)

开始下载前，可以选择 **计算大小** 或 **直接下载** 。

> - **计算大小** ：下载前先估算需要下载的图块大小。
> - **直接下载** ：直接开始图块下载。

![离线存储地图图块](../asset/map-tools/ovital/download-map-06.png)

若选择 **计算大小** ，则App会先行计算需要下载的图块的大小。

![离线存储地图图块](../asset/map-tools/ovital/download-map-07.png)

计算完成后，点击 **下载** 即可开始下载。

![离线存储地图图块](../asset/map-tools/ovital/download-map-08.png)

等待App下载地图图块。

![离线存储地图图块](../asset/map-tools/ovital/download-map-09.png)

地图图库爱下载完成后，将继续下载地图路网。

![离线存储地图图块](../asset/map-tools/ovital/download-map-10.png)

完成下载后，App将弹出提示。

![离线存储地图图块](../asset/map-tools/ovital/download-map-11.png)

---

## 航迹

奥维互动地图支持记录GPS航迹功能。在野外调查中，通过记录GPS航迹，在后期整理数据的时候，可以很方便地在Google Earth上查看当时的周边地形，亦可为相机的照片标记地理位置。本节主要介绍以下航迹功能：

- 创建目录
- 记录GPS航迹
- 标记路点
- 导出GPS航迹数据
- 从数据文件载入航迹

### 创建目录

一般情况下，所标记的路点，应当和当前航迹同属于一组数据，因此需要提前在收藏中建立文件夹，以将路点与航迹包含在一起，方便导出。

点击App底部菜单中的 **收藏** 按钮，打开收藏界面。

![创建目录](../asset/map-tools/ovital/create-folder-00.png)

在收藏界面中，点击右上角的 **菜单** 按钮。

![创建目录](../asset/map-tools/ovital/create-folder-01.png)

在弹出菜单中，选择 **新建文件夹** 按钮。

![创建目录](../asset/map-tools/ovital/create-folder-02.png)

在弹出的对话框中，输入文件夹名称，点击 **确定** 。

![创建目录](../asset/map-tools/ovital/create-folder-03.png)

创建完成后，即可将后续产生的航迹和路点均放置于此目录下，导出时，导出此目录为一个航迹数据文件即可。

---

### 记录GPS航迹

#### 开始记录GPS航迹

点击App左侧菜单中的 **GPS功能** 按钮。

![记录GPS航迹](../asset/map-tools/ovital/record-00.png)

在GPS功能界面中，切换至 **开始记录轨迹** 选项。

![记录GPS航迹](../asset/map-tools/ovital/record-01.png)

开始记录航迹后，左侧GPS图标变换为记录的图标，且地图中出现航迹与起点。

![记录GPS航迹](../asset/map-tools/ovital/record-02.png)

#### 暂停记录GPS航迹

当到达目的地，需要暂停记录GPS轨迹时，可以点击App左侧菜单中的 **GPS功能** 按钮。

在GPS功能界面中，切换至 **暂停记录轨迹** 选项。

![记录GPS航迹](../asset/map-tools/ovital/record-03.png)

暂停记录航迹后，左侧GPS图标变换为暂停的图标。

如需重新开始，在GPS功能界面中，再次切换至 **开始记录轨迹** 选项即可。

重新开始记录后，地图上将出现一段新的GPS轨迹及起点。

![记录GPS航迹](../asset/map-tools/ovital/record-04.png)

#### 编辑、保存路径

在地图上点击路径，即可进入路径界面。

编辑 **名称** 、 **文件夹** 等信息，点击右上角的 **保存** 按钮。

![记录GPS航迹](../asset/map-tools/ovital/record-05.png)

![记录GPS航迹](../asset/map-tools/ovital/record-06.png)

当完成GPS航迹记录时，点击左侧 **GPS功能** 按钮，在GPS功能界面中，切换至 **停止记录轨迹并保存** 选项，然后编辑最后一段路径信息即可。

![记录GPS航迹](../asset/map-tools/ovital/record-07.png)

---

### 标记路点

#### 添加普通路点

如需标记当前路点，在地图上长按当前位置，即可弹出路点界面。

在路点界面中，编辑 **名称** 、 **文件夹** （选择刚刚创建的文件夹） 、 **图标** 等信息后，点击右上角 **保存** 按钮。

![标记路点](../asset/map-tools/ovital/waypoint-00.png)

![标记路点](../asset/map-tools/ovital/waypoint-01.png)

保存后，路点将出现在地图上。

![标记路点](../asset/map-tools/ovital/waypoint-02.png)

如需在任意位置添加路点，长按希望的位置，再在弹出的界面中添加路点即可。

![标记路点](../asset/map-tools/ovital/waypoint-03.png)

#### 添加照片路点

在路点界面中，点击 **附件** 选项。

![标记路点](../asset/map-tools/ovital/waypoint-04.png)

在弹出的附件界面中，点击 **照相** 按钮。

![标记路点](../asset/map-tools/ovital/waypoint-05.png)

在弹出的界面中，点击期望的分辨率，即可调起系统相机拍照。点击右侧 **默认** 按钮，可将选定的画质指定为默认选项。

![标记路点](../asset/map-tools/ovital/waypoint-06.png)

拍照并确认后，即可回到App，查看附件信息。确认无误后，点击 **保存** 按钮。

![标记路点](../asset/map-tools/ovital/waypoint-07.png)

保存后，在附件库中，可以检查和管理附件。

![标记路点](../asset/map-tools/ovital/waypoint-08.png)

将路点保存后，即可看到，地图中出现了照片路点。

![标记路点](../asset/map-tools/ovital/waypoint-09.png)

---

### 导出GPS航迹数据

当记录完成后，需要将GPS数据导出，以供其他设备使用。

点击App底部菜单的 **收藏** 按钮。

![导出GPS航迹数据](../asset/map-tools/ovital/export-00.png)

在收藏界面，可查看已有的数据，点击目录，即可查看属于某个目录下的具体数据内容，也就是将要被导出的内容。

![导出GPS航迹数据](../asset/map-tools/ovital/export-01.png)

在收藏界面，点击右上角的 **菜单** 按钮。

![导出GPS航迹数据](../asset/map-tools/ovital/export-02.png)

在弹出菜单中，选择 **导入导出** 选项。

![导出GPS航迹数据](../asset/map-tools/ovital/export-03.png)

在导入导出界面中，选择 **导出对象** 按钮。

![导出GPS航迹数据](../asset/map-tools/ovital/export-04.png)

进行导出前的设置，编辑 **文件类型** 、 **文件名** 后，根据需要，点击 **发送邮件** 或 **保存到文件** 按钮。

> - **发送邮件** ：保存文件后通过手机内置的功能进行分享（途径可选，不一定通过邮件形式）
> - **保存到文件** ： 将文件保存至App存储空间内

![导出GPS航迹数据](../asset/map-tools/ovital/export-05.png)

在弹出界面中，勾选需要导出的目录。

![导出GPS航迹数据](../asset/map-tools/ovital/export-06.png)

最后进行确认，点击右上角 **导出** 按钮。

![导出GPS航迹数据](../asset/map-tools/ovital/export-07.png)

若选择的是 **保存到文件** ，导出完成后，会收到如下提示。

![导出GPS航迹数据](../asset/map-tools/ovital/export-08.png)

若选择的是 **发送邮件** ，导出完成后，会收到如下提示。点击 **确定** 按钮，调起系统分享浮层。

![导出GPS航迹数据](../asset/map-tools/ovital/export-09.png)

在分享浮层中，选择希望的分享方式即可。

![导出GPS航迹数据](../asset/map-tools/ovital/export-10.png)

此处以`MIUI8`分享到 *小米云盘* 为例。

![导出GPS航迹数据](../asset/map-tools/ovital/export-11.png)

---

### 从数据文件载入航迹

我们可以将进行野外调查前，事先准备好的航迹/路点文件，导入奥维互动地图，以在野外调查时比对查看。

点击App底部菜单的 **更多** 按钮。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-00.png)

在更多界面，选择 **导入导出对象** 选项。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-01.png)

选择 **从文件导入** 选项。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-02.png)

在文件导入界面，选择希望导入的数据文件。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-03.png)

选择后，点击右上角的 **导入** 按钮。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-04.png)

导入前，可以选择 **添加导入** 或 **覆盖导入** 。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-05.png)

完成导入后，App将弹出提示。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-06.png)

此时，带入的航迹将显示在地图上。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-07.png)

需要管理导入的数据文件，可点击App底部菜单的 **收藏** 按钮。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-08.png)

在收藏界面，可以对已有的数据文件进行管理。

> - 点击文件左侧的 **显示/隐藏（眼睛图标）** 按钮可切换航迹在地图上的显示/隐藏。
> - 点击右上角的 **菜单** 按钮，可显示菜单，在菜单中点击 **编辑** 选项，可对导入的数据文件进行删除等操作。
> - 点击文件右侧的 **详细** 按钮，可查看数据文件的详情。

![从数据文件载入航迹](../asset/map-tools/ovital/reload-09.png)
