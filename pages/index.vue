<template>
  <div class="home">
    <Banner
      class="home-banner"
      :image="bannerImage"
      title="Sony X-Images"
      message="Opening medical imaging to the wider community."
    />
    <input id="file-input" type="file" accept="image/*" @change="uploadImage" />
    <div class="tiles">
      <ContentTile
        v-for="tile in apiResponse"
        :key="tile + '-tile'"
        :source="tile"
        class="tile"
      />
    </div>
    <br />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import ContentTile from '@/components/ContentTile'
import academyImage from '@/assets/img/background.png'
import { apiGet } from '@/utils/api'
import { apiPost } from '@/utils/api'

export default {
  name: 'Home',
  components: {
    Banner,
    ContentTile,
  },
  data() {
    return {
      bannerImage: academyImage,
      tiles: [
        {
          title: 'A tile Bruno',
          text: 'This is a reusable component.',
        },
        {
          title: 'Another tile',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla purus eget nibh venenatis.',
        },
        {
          title: 'A third tile',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, nibh id faucibus egestas.',
        },
        {
          title: 'A fourth tile',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus, nibh id faucibus egestas.',
        },
      ],
      apiResponse: '',
      image: '',
    }
  },
  mounted() {
    this.fetchGreeting()
  },
  methods: {
    fetchGreeting() {
      apiGet(
        'https://ck7f3w6408.execute-api.eu-west-1.amazonaws.com/IL/teams/sony/files'
      )
        .then(({ data }) => (this.apiResponse = data.data))
        .catch(
          () => (this.apiResponse = 'Failed to retrieve data from server.')
        )
    },
    uploadImage(e) {
      const selectedImage = e.target.files[0]
      console.log(e.target.files)
      console.log(e.target.files[0])
      this.createBase64Image(selectedImage)
    },
    createBase64Image(selectedImage) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
        this.sendImagePost()
      }
      reader.readAsDataURL(selectedImage)
    },
    sendImagePost() {
      const { image } = this
      const fileId = this.genId()
      const url =
        'https://ck7f3w6408.execute-api.eu-west-1.amazonaws.com/IL/teams/sony/files/' +
        fileId
      apiPost(url, image)
    },
    genId() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
        c
      ) {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    },
  },
}
</script>

<style scoped lang="scss">
.home {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.home-banner {
  margin-bottom: 35px;
}

.tiles {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.tile {
  margin-top: 10px;
}
</style>
