<template>
  <!-- TODO: v-forでメニュー項目増やすようにする -->
  <!-- TODO: 表示非表示の処理 -->
  <v-card max-width="230">
    <v-list>
      <v-subheader>メニュー</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon><v-icon>mdi-pen</v-icon></v-list-item-icon>
          <v-list-item-content>タスクを編集</v-list-item-content>
        </v-list-item>
        <v-divider inset="inset"></v-divider>
        <v-list-item>
          <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
          <v-list-item-content>タスクを削除</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return { inset: true };
  }
};
</script>

<style></style>
