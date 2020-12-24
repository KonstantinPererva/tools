function handleTextReplace(node, reg, textReplace) {
    let self = this;
    self.node = node;
    self.reg = reg;
    self.textReplace = textReplace;
    self.str = self.node.textContent;
    self.result = self.str.match(self.reg) || [];

    if (!self.result.length) return;

    self.newstr = self.str.replace(self.reg, self.textReplace);
    self.node.textContent = self.newstr;
}