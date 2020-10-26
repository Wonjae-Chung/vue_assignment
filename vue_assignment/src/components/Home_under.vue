<template>
  <div class="container">
      <router-link to='Big_left'> 링크 </router-link>
        <b-row>
            <b-col cols="5">
                <!-- 왼쪽 컨텐츠 -->
                <h2 class="map-heading">내 주변 추천 여행지</h2>
                <br>
                <img class="media-object" width="300pt" src="@/chick.png" />
            </b-col>
            <b-col cols="7">
                <!-- 오른쪽 컨텐츠 -->
                    <h2>최근의 이슈</h2>
                    <br>
                    <b-row>
                        <b-col>
                            <ul class="media-list">
                                <li class="media">
                                    <b-row col="2">
                                        <!--큰사진 왼쪽-->
                                        <b-col class="media-heading">
                                            <router-link to='Big_left'>
                                                <img class="media-object" width="300pt" height="100pt" src="@/blue.jpg" />
                                            </router-link>
                                        </b-col>
                                        <!--큰사진 오른쪽-->
                                        <b-col class="media-heading">
                                            <router-link to='Big_right'>
                                                <img class="media-object" width="300pt" height="100pt" src="@/blue.jpg" />
                                            </router-link>
                                        </b-col>
                                        <!--글 왼쪽-->
                                        <b-col class="media-body">
                                            <router-link to='Big_left'>
                                                <h4 class="media-heading">들어보라 청춘의</h4>
                                                <p>그것을 보는 때에 그것을 보는 때에 그것을 보는 때에 그것을 보는 때에</p>
                                            </router-link>
                                        </b-col>
                                        <!--글 오른쪽-->
                                        <b-col class="media-body">
                                            <router-link to='Big_right'>
                                                <h4 class="media-heading">들어보라 청춘의</h4>
                                                <p>그것을 보는 때에 그것을 보는 때에 그것을 보는 때에 그것을 보는 때에</p>
                                            </router-link>
                                        </b-col>
                                    </b-row>                   
                                </li>
                            </ul>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="2" class="media-left">
                            <img class="media-object img-responsive" width="120pt" src="@/chick.png"/>
                        </b-col>
                        <b-col cols ="4" class="media-right">
                            <h4 class="media-heading">들어보라 청춘의</h4>
                            <p>그것을 보는 때에 그것을 보는 때에 그것을 보는 때에 그것을 보는 때에</p>
                        </b-col>
                        <b-col cols="2" class="media-left">
                            <img class="media-object img-responsive" width="120pt" src="@/chick.png"/>
                        </b-col>
                        <b-col cols="4" class="media-right">
                            <h4 class="media-heading">들어보라 청춘의</h4>
                            <p>그것을 보는 때에 그것을 보는 때에 그것을 보는 때에 그것을 보는 때에</p>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col cols="2" class="media-left">
                            <img class="media-object img-responsive" width="120pt" src="@/chick.png"/>
                        </b-col>
                        <b-col cols="4" class="media-right">
                            <h4 class="media-heading">들어보라 청춘의</h4>
                            <p>그것을 보는 때에 그것을 보는 때에 그것을 보는 때에 그것을 보는 때에</p>
                        </b-col>
                        <b-col cols="2" class="media-left">
                            <img class="media-object img-responsive" width="120pt" src="@/chick.png"/>
                        </b-col>
                        <b-col cols="4" class="media-right">
                            <h4 class="media-heading">들어보라 청춘의</h4>
                            <p>그것을 보는 때에 그것을 보는 때에 그것을 보는 때에 그것을 보는 때에</p>
                        </b-col>
                    </b-row>  
            </b-col>
        </b-row>
  </div>
</template>

<script>
export default {
};
</script>


