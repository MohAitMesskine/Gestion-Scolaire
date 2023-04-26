<template>
<NavBar />
<el-main  class="container" >  
      API DATA
 <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="Id" prop="id" />
    <el-table-column label="Email" prop="email" />
    <el-table-column label="First Name" prop="first_name" />
    <el-table-column label="Last Name" prop="last_name" />

    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
<el-pagination class="paginate" v-model:current-page="currentPage4" v-model:page-size="per_page" :page-sizes="[2, 4, 6, 8]"
              :small="small" :disabled="disabled" :background="background"
              layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
              @current-change="handleCurrentChange" />
 
  </el-main>
  <!-- <p v-for="item in data" :key="item.id">{{item.id}}</p> -->
  <!-- <el-footer><Footer /></el-footer> -->
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
 import Footer from '../components/Footer.vue'
    import NavBar from '../components/NavBar.vue'
    import axios from "axios"
    const post = ref([])
    const page =ref(1)
    const total=ref(0)
    const per_page=ref(0)


    //  const  list =[] 
    // let result= await axios.get("https://reqres.in/api/users?page=1")
    // list=result.data.data

  fetch('https://reqres.in/api/users?page=1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data);
    console.log(data);
    console.log(data);
    page.value=data.page;
    total.value=data.total
    post.value = data.data;
    per_page.value=data.per_page;
    })
    
  // .then(data => post = console.log(data) )
 

  interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>


  post.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )

)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}


  const totalRows = filterTableData.value.length;
  const pageSize = ref(2);
  const pageData = ref(filterTableData.value.slice(0, 2))

  const handleSizeChange = (s) => {
    per_page.value=s;
     fetch('https://reqres.in/api/users?page='+ page.value + '&per_page=' + s)
  .then(response => response.json())
  .then(data => {
   
    page.value=data.page;
    total.value=data.total
    post.value = data.data;
    per_page.value=data.per_page;
    })

  }

  const handleCurrentChange = (i) => {
    page.value=i;
   fetch('https://reqres.in/api/users?page='+ i + '&per_page=' + per_page.value )
  .then(response => response.json())
  .then(data => {
    page.value=data.page;
    total.value=data.total
    post.value = data.data;
    per_page.value=data.per_page;
    })

  }


const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
  
</script>


<style scoped>
.paginate{
  margin-top: 50px;
}
</style>