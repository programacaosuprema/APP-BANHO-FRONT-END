import React, { useState, useEffect } from "react";
import { View, StyleSheet, Modal } from "react-native";
import { Text, Provider, IconButton } from "react-native-paper";

interface AlertModalProps {
  title: string;
  message: string;
  type?: "success" | "error" | "warning";
}

export default function AlertModal({ title, message, type = "warning" }: AlertModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), 4000); // Fecha após 4s
  }, []);

  // Definição de cores e ícones para cada tipo de alerta
  const alertStyles = {
    success: {
      backgroundColor: "#D4EDDA",
      icon: "check-circle",
      iconColor: "#155724",
      titleColor: "#155724",
    },
    error: {
      backgroundColor: "#F8D7DA",
      icon: "alert-circle",
      iconColor: "#721C24",
      titleColor: "#721C24",
    },
    warning: {
      backgroundColor: "#FFF3CD",
      icon: "alert",
      iconColor: "#856404",
      titleColor: "#856404",
    },
  };

  const { backgroundColor, icon, iconColor, titleColor } = alertStyles[type];

  return (
    <Provider>
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={[styles.modalContainer, { backgroundColor }]}>
            <IconButton icon={icon} size={40} iconColor={iconColor} />
            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
            <Text style={styles.message}>{message || "Mensagem de alerta"}</Text>
          </View>
        </View>
      </Modal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Fundo escuro para destacar o modal
  },
  modalContainer: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
});
