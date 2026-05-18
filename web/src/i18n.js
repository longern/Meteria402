import React, { createContext, useContext, useMemo, useState } from "react";

const TRANSLATIONS = {
  en: {
    Recharge: "Recharge",
    "Autopay Limits": "Autopay Limits",
    "API Keys": "API Keys",
    Usage: "Usage",
    Settings: "Settings",
    "Activate account": "Activate account",
    "Account Balance": "Account Balance",
    "Deposit Balance": "Deposit Balance",
    "Unpaid Invoices": "Unpaid Invoices",
    Amount: "Amount",
    Network: "Network",
    Payer: "Payer",
    Status: "Status",
    "Settled at": "Settled at",
    Action: "Action",
    active: "active",
    "Add deposit": "Add deposit",
    "Pay deposit": "Pay deposit",
    "Autopay Wallet": "Autopay Wallet",
    Address: "Address",
    Balance: "Balance",
    "Deposit History": "Deposit History",
    "Edit Autopay Endpoint": "Edit Autopay Endpoint",
    "Endpoint URL": "Endpoint URL",
    Cancel: "Cancel",
    Save: "Save",
    Close: "Close",
    "Open link": "Open link",
    "Refresh balance": "Refresh balance",
    "Refresh deposit history": "Refresh deposit history",
    "Sign-in Wallet": "Sign-in Wallet",
    "Rebind Sign-in Wallet": "Rebind Sign-in Wallet",
    "Auto-Recharge": "Auto-Recharge",
    Rebind: "Rebind",
    Edit: "Edit",
    "Edit Auto-Recharge": "Edit Auto-Recharge",
    "Rebind wallet": "Rebind wallet",
    "Confirming...": "Confirming...",
    "Save minimum": "Save minimum",
    "Saving...": "Saving...",
    URL: "URL",
    "Base URL": "Base URL",
    "Create key": "Create key",
    "Create API Key": "Create API Key",
    "Creating...": "Creating...",
    "No API keys": "No API keys",
    Enable: "Enable",
    Disable: "Disable",
    Delete: "Delete",
    "Refresh API keys": "Refresh API keys",
    "Pre-approvals": "Pre-approvals",
    "Create limit": "Create limit",
    "Create Autopay Limit": "Create Autopay Limit",
    Revoke: "Revoke",
    "Approve limit": "Approve limit",
    "Limit created": "Limit created",
    "Refresh autopay limits": "Refresh autopay limits",
    "Model Calls": "Model Calls",
    Invoices: "Invoices",
    "Pay invoice": "Pay invoice",
    "Refresh model calls": "Refresh model calls",
    "Refresh invoices": "Refresh invoices",
    "Add Deposit": "Add Deposit",
    "Pay with wallet": "Pay with wallet",
    "I've paid — Refresh": "I've paid — Refresh",
    "nav:API Keys": "API Keys",
  },
  zh: {
    Recharge: "账户充值",
    "Autopay Limits": "自动支付限额",
    "API Keys": "API 密钥",
    Usage: "用量分析",
    Settings: "个人设置",
    "Activate account": "激活账户",
    "Account Balance": "账户余额",
    "Deposit Balance": "押金余额",
    "Unpaid Invoices": "未付账单",
    Amount: "金额",
    Network: "网络",
    Payer: "付款钱包",
    Status: "状态",
    "Settled at": "结算时间",
    Action: "操作",
    active: "激活",
    "Add deposit": "充值押金",
    "Pay deposit": "支付押金",
    "Autopay Wallet": "自动支付钱包",
    Address: "地址",
    Balance: "余额",
    "Deposit History": "充值历史",
    "Edit Autopay Endpoint": "编辑自动支付端点",
    "Endpoint URL": "端点 URL",
    Cancel: "取消",
    Save: "保存",
    Close: "关闭",
    "Open link": "打开链接",
    "Refresh balance": "刷新余额",
    "Refresh deposit history": "刷新充值历史",
    "Sign-in Wallet": "登录钱包",
    "Rebind Sign-in Wallet": "重新绑定登录钱包",
    "Auto-Recharge": "自动充值",
    Rebind: "重新绑定",
    Edit: "编辑",
    "Edit Auto-Recharge": "编辑自动充值",
    "Rebind wallet": "重新绑定钱包",
    "Confirming...": "确认中...",
    "Save minimum": "保存最低金额",
    "Saving...": "保存中...",
    URL: "URL",
    "Base URL": "Base URL",
    "Create key": "创建密钥",
    "Create API Key": "创建 API 密钥",
    "Creating...": "创建中...",
    "No API keys": "暂无 API 密钥",
    Enable: "启用",
    Disable: "禁用",
    Delete: "删除",
    "Refresh API keys": "刷新 API 密钥",
    "Pre-approvals": "预授权",
    "Create limit": "创建限额",
    "Create Autopay Limit": "创建自动支付限额",
    Revoke: "撤销",
    "Approve limit": "批准限额",
    "Limit created": "限额已创建",
    "Refresh autopay limits": "刷新自动支付限额",
    "Model Calls": "模型调用",
    Invoices: "账单",
    "Pay invoice": "支付账单",
    "Refresh model calls": "刷新模型调用",
    "Refresh invoices": "刷新账单",
    "Add Deposit": "充值押金",
    "Pay with wallet": "用钱包支付",
    "I've paid — Refresh": "我已支付 — 刷新",
    "nav:API Keys": "密钥管理",
  },
  ja: {
    Recharge: "チャージ",
    "Autopay Limits": "自動支払い限度額",
    "API Keys": "API キー",
    Usage: "使用量",
    Settings: "設定",
    "Activate account": "アカウントを有効化",
    "Account Balance": "アカウント残高",
    "Deposit Balance": "デポジット残高",
    "Unpaid Invoices": "未払い請求書",
    Amount: "金額",
    Network: "ネットワーク",
    Payer: "支払いウォレット",
    Status: "ステータス",
    "Settled at": "決済日時",
    Action: "操作",
    active: "有効",
    "Add deposit": "デポジット追加",
    "Pay deposit": "デポジットを支払う",
    "Autopay Wallet": "自動支払いウォレット",
    Address: "アドレス",
    Balance: "残高",
    "Deposit History": "デポジット履歴",
    "Edit Autopay Endpoint": "自動支払いエンドポイントを編集",
    "Endpoint URL": "エンドポイント URL",
    Cancel: "キャンセル",
    Save: "保存",
    Close: "閉じる",
    "Open link": "リンクを開く",
    "Refresh balance": "残高を更新",
    "Refresh deposit history": "デポジット履歴を更新",
    "Sign-in Wallet": "ログインウォレット",
    "Rebind Sign-in Wallet": "ログインウォレットを再バインド",
    "Auto-Recharge": "自動チャージ",
    Rebind: "再バインド",
    Edit: "編集",
    "Edit Auto-Recharge": "自動チャージを編集",
    "Rebind wallet": "ウォレットを再バインド",
    "Confirming...": "確認中...",
    "Save minimum": "最小額を保存",
    "Saving...": "保存中...",
    URL: "URL",
    "Base URL": "Base URL",
    "Create key": "キーを作成",
    "Create API Key": "API キーを作成",
    "Creating...": "作成中...",
    "No API keys": "API キーはありません",
    Enable: "有効化",
    Disable: "無効化",
    Delete: "削除",
    "Refresh API keys": "API キーを更新",
    "Pre-approvals": "事前承認",
    "Create limit": "限度額を作成",
    "Create Autopay Limit": "自動支払い限度額を作成",
    Revoke: "取り消し",
    "Approve limit": "限度額を承認",
    "Limit created": "限度額を作成しました",
    "Refresh autopay limits": "自動支払い限度額を更新",
    "Model Calls": "モデル呼び出し",
    Invoices: "請求書",
    "Pay invoice": "請求書を支払う",
    "Refresh model calls": "モデル呼び出しを更新",
    "Refresh invoices": "請求書を更新",
    "Add Deposit": "デポジット追加",
    "Pay with wallet": "ウォレットで支払う",
    "I've paid — Refresh": "支払い済み — 更新",
    "nav:API Keys": "キー管理",
  },
};

function detectLocale() {
  const lang = (navigator.language || "en").toLowerCase();
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("ja")) return "ja";
  return "en";
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => detectLocale());

  const value = useMemo(() => {
    function t(key, options = {}) {
      const ns = options.ns;

      // 1. Try namespaced key: "nav:API Keys"
      if (ns) {
        const nsKey = `${ns}:${key}`;
        const text = TRANSLATIONS[locale]?.[nsKey];
        if (text !== undefined) return text;
      }

      // 2. Try plain key in current locale
      const text = TRANSLATIONS[locale]?.[key];
      if (text !== undefined) return text;

      // 3. Fallback: return the English key itself
      return key;
    }
    return { locale, setLocale, t, supportedLocales: Object.keys(TRANSLATIONS) };
  }, [locale]);

  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
}
