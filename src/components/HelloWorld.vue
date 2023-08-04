<template>
  <div class="hello">
	<iframe
	  v-if="iframeShow"
	  ref="unity"
	  :src="getPageUrl"
	  frameborder="0"
	  scrolling="no"
	  style="width: 100vw; height: 100vh;"
	></iframe>
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    msg: String
  },
  data() {
  	return {
  		getPageUrl: '/YMAPP/index.html',
		iframeShow: false
  	}
  },
  methods: {
	  handleMessage(event) {
		const data = event.data.data
		if(data && data.code === "success"){
			window.parent.postMessage({
				 data: {
				   code:"success",
				   text:"经纬度"
				 }
			}, '*');
			// uni.postMessage({
			// 	data: {
			// 		action: '经纬度'
			// 	}
			// })
		}
	  },
	  position() {

	  },
  },
  mounted() {
	window.addEventListener('message', this.handleMessage);
  	var data = {}
  	window.test = (id) => {
  		if (id == 'false') {
  			data.wvbtnshow = false
  		} else {
  			data.wvbtnshow = true
  		}
  	};
  	window.postTaskId = (id) => {
  		data.taskId = id ? id : 1
  	};
  	window.postPosition = (id) => {
  		MobilePhoneLocation(id)
  	};
  	window.postLocation = (id) => {
  		data.location = id ? id : 1
  	};
	
	window.projectDataName = (id) => {
		data.waters_name = id ? id : 1
	};
	window.projectDataId = (id) => {
		data.waters_id = id ? id : 1
	};
	window.projectDataShipId = (id) => {
		data.shipId = id ? id : 1
	};
	window.projectDataShipName = (id) => {
		data.shipName = id ? id : 1
	};
	window.projectDataShipNumber = (id) => {
		data.shipNumber = id ? id : 1
	};
	// 接收水域列表
	window.postWaterList = (id) => {
		// alert(id)
		console.log(id, 'waterList')
		data.waterList = id
		localStorage.setItem('waterList', id)
	};
	// 接收地图显示类型
	window.postMapType = (id) => {
		// alert(id)
		data.mapType = id ? id : 'label'
	};
  // 	window.projectData = (id) => {
		// alert(id.projects_info[0].name)
  // 		data.projectData = id
  // 	};
  	window.postEndTime = (id) => {
  		if (id != '') { // 结束状态
  			data.endTime = id
  			data.isend = true
  		} else {
  			data.isend = false
  		}
  	};
	let _this = this
	setTimeout(() => {
		this.getPageUrl = '/YMAPP/index.html' + `?name=${data.waters_name}&waters_id=${data.waters_id}&id=${data.shipId}&shipName=${data.shipName}&number=${data.shipNumber}&taskId=${data.taskId}&mapType=${data.mapType}`
		// this.getPageUrl = '/YMAPP/index.html'
		this.iframeShow = true
		setTimeout(() => {
			_this.$refs.unity.contentWindow.postMessage({
			   cmd: 'success',
			   data: data
			}, '*')
		}, 1300)
	}, 600)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
