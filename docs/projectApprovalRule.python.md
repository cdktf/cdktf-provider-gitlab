# `gitlab_project_approval_rule`

Refer to the Terraform Registory for docs: [`gitlab_project_approval_rule`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule).

# `projectApprovalRule` Submodule <a name="`projectApprovalRule` Submodule" id="@cdktf/provider-gitlab.projectApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectApprovalRule <a name="ProjectApprovalRule" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule gitlab_project_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_approval_rule

projectApprovalRule.ProjectApprovalRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  approvals_required: typing.Union[int, float],
  name: str,
  project: str,
  applies_to_all_protected_branches: typing.Union[bool, IResolvable] = None,
  disable_importing_default_any_approver_rule_on_create: typing.Union[bool, IResolvable] = None,
  group_ids: typing.List[typing.Union[int, float]] = None,
  id: str = None,
  protected_branch_ids: typing.List[typing.Union[int, float]] = None,
  rule_type: str = None,
  user_ids: typing.List[typing.Union[int, float]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.approvalsRequired">approvals_required</a></code> | <code>typing.Union[int, float]</code> | The number of approvals required for this rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the approval rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.project">project</a></code> | <code>str</code> | The name or id of the project to add the approval rules. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.appliesToAllProtectedBranches">applies_to_all_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is applied to all protected branches. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.disableImportingDefaultAnyApproverRuleOnCreate">disable_importing_default_any_approver_rule_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this flag is set, the default `any_approver` rule will not be imported if present. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.groupIds">group_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of group IDs whose members can approve of the merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#id ProjectApprovalRule#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.protectedBranchIds">protected_branch_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of protected branch IDs (not branch names) for which the rule applies. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.ruleType">rule_type</a></code> | <code>str</code> | String, defaults to 'regular'. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.userIds">user_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of specific User IDs to add to the list of approvers. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approvals_required`<sup>Required</sup> <a name="approvals_required" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.approvalsRequired"></a>

- *Type:* typing.Union[int, float]

The number of approvals required for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#approvals_required ProjectApprovalRule#approvals_required}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the approval rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#name ProjectApprovalRule#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.project"></a>

- *Type:* str

The name or id of the project to add the approval rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#project ProjectApprovalRule#project}

---

##### `applies_to_all_protected_branches`<sup>Optional</sup> <a name="applies_to_all_protected_branches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.appliesToAllProtectedBranches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is applied to all protected branches.

If set to 'true', the value of `protected_branch_ids` is ignored. Default is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#applies_to_all_protected_branches ProjectApprovalRule#applies_to_all_protected_branches}

---

##### `disable_importing_default_any_approver_rule_on_create`<sup>Optional</sup> <a name="disable_importing_default_any_approver_rule_on_create" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.disableImportingDefaultAnyApproverRuleOnCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this flag is set, the default `any_approver` rule will not be imported if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#disable_importing_default_any_approver_rule_on_create ProjectApprovalRule#disable_importing_default_any_approver_rule_on_create}

---

##### `group_ids`<sup>Optional</sup> <a name="group_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.groupIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

A list of group IDs whose members can approve of the merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#group_ids ProjectApprovalRule#group_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#id ProjectApprovalRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protected_branch_ids`<sup>Optional</sup> <a name="protected_branch_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.protectedBranchIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

A list of protected branch IDs (not branch names) for which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#protected_branch_ids ProjectApprovalRule#protected_branch_ids}

---

##### `rule_type`<sup>Optional</sup> <a name="rule_type" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.ruleType"></a>

- *Type:* str

String, defaults to 'regular'.

The type of rule. `any_approver` is a pre-configured default rule with `approvals_required` at `0`. Valid values are `regular`, `any_approver`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#rule_type ProjectApprovalRule#rule_type}

---

##### `user_ids`<sup>Optional</sup> <a name="user_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.userIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

A list of specific User IDs to add to the list of approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#user_ids ProjectApprovalRule#user_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetAppliesToAllProtectedBranches">reset_applies_to_all_protected_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetDisableImportingDefaultAnyApproverRuleOnCreate">reset_disable_importing_default_any_approver_rule_on_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetGroupIds">reset_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetProtectedBranchIds">reset_protected_branch_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetRuleType">reset_rule_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetUserIds">reset_user_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_applies_to_all_protected_branches` <a name="reset_applies_to_all_protected_branches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetAppliesToAllProtectedBranches"></a>

```python
def reset_applies_to_all_protected_branches() -> None
```

##### `reset_disable_importing_default_any_approver_rule_on_create` <a name="reset_disable_importing_default_any_approver_rule_on_create" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetDisableImportingDefaultAnyApproverRuleOnCreate"></a>

```python
def reset_disable_importing_default_any_approver_rule_on_create() -> None
```

##### `reset_group_ids` <a name="reset_group_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetGroupIds"></a>

```python
def reset_group_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protected_branch_ids` <a name="reset_protected_branch_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetProtectedBranchIds"></a>

```python
def reset_protected_branch_ids() -> None
```

##### `reset_rule_type` <a name="reset_rule_type" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetRuleType"></a>

```python
def reset_rule_type() -> None
```

##### `reset_user_ids` <a name="reset_user_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetUserIds"></a>

```python
def reset_user_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_approval_rule

projectApprovalRule.ProjectApprovalRule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_approval_rule

projectApprovalRule.ProjectApprovalRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_approval_rule

projectApprovalRule.ProjectApprovalRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_approval_rule

projectApprovalRule.ProjectApprovalRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectApprovalRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectApprovalRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranchesInput">applies_to_all_protected_branches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequiredInput">approvals_required_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreateInput">disable_importing_default_any_approver_rule_on_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIdsInput">group_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIdsInput">protected_branch_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIdsInput">user_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranches">applies_to_all_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequired">approvals_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreate">disable_importing_default_any_approver_rule_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIds">group_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIds">protected_branch_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIds">user_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applies_to_all_protected_branches_input`<sup>Optional</sup> <a name="applies_to_all_protected_branches_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranchesInput"></a>

```python
applies_to_all_protected_branches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approvals_required_input`<sup>Optional</sup> <a name="approvals_required_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequiredInput"></a>

```python
approvals_required_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_importing_default_any_approver_rule_on_create_input`<sup>Optional</sup> <a name="disable_importing_default_any_approver_rule_on_create_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreateInput"></a>

```python
disable_importing_default_any_approver_rule_on_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_ids_input`<sup>Optional</sup> <a name="group_ids_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIdsInput"></a>

```python
group_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protected_branch_ids_input`<sup>Optional</sup> <a name="protected_branch_ids_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIdsInput"></a>

```python
protected_branch_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `user_ids_input`<sup>Optional</sup> <a name="user_ids_input" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIdsInput"></a>

```python
user_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `applies_to_all_protected_branches`<sup>Required</sup> <a name="applies_to_all_protected_branches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.appliesToAllProtectedBranches"></a>

```python
applies_to_all_protected_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approvals_required`<sup>Required</sup> <a name="approvals_required" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequired"></a>

```python
approvals_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_importing_default_any_approver_rule_on_create`<sup>Required</sup> <a name="disable_importing_default_any_approver_rule_on_create" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreate"></a>

```python
disable_importing_default_any_approver_rule_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_ids`<sup>Required</sup> <a name="group_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIds"></a>

```python
group_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protected_branch_ids`<sup>Required</sup> <a name="protected_branch_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIds"></a>

```python
protected_branch_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `user_ids`<sup>Required</sup> <a name="user_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIds"></a>

```python
user_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectApprovalRuleConfig <a name="ProjectApprovalRuleConfig" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_approval_rule

projectApprovalRule.ProjectApprovalRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  approvals_required: typing.Union[int, float],
  name: str,
  project: str,
  applies_to_all_protected_branches: typing.Union[bool, IResolvable] = None,
  disable_importing_default_any_approver_rule_on_create: typing.Union[bool, IResolvable] = None,
  group_ids: typing.List[typing.Union[int, float]] = None,
  id: str = None,
  protected_branch_ids: typing.List[typing.Union[int, float]] = None,
  rule_type: str = None,
  user_ids: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.approvalsRequired">approvals_required</a></code> | <code>typing.Union[int, float]</code> | The number of approvals required for this rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the approval rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.project">project</a></code> | <code>str</code> | The name or id of the project to add the approval rules. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.appliesToAllProtectedBranches">applies_to_all_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is applied to all protected branches. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.disableImportingDefaultAnyApproverRuleOnCreate">disable_importing_default_any_approver_rule_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this flag is set, the default `any_approver` rule will not be imported if present. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.groupIds">group_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of group IDs whose members can approve of the merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#id ProjectApprovalRule#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.protectedBranchIds">protected_branch_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of protected branch IDs (not branch names) for which the rule applies. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.ruleType">rule_type</a></code> | <code>str</code> | String, defaults to 'regular'. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.userIds">user_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of specific User IDs to add to the list of approvers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approvals_required`<sup>Required</sup> <a name="approvals_required" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.approvalsRequired"></a>

```python
approvals_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of approvals required for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#approvals_required ProjectApprovalRule#approvals_required}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the approval rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#name ProjectApprovalRule#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The name or id of the project to add the approval rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#project ProjectApprovalRule#project}

---

##### `applies_to_all_protected_branches`<sup>Optional</sup> <a name="applies_to_all_protected_branches" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.appliesToAllProtectedBranches"></a>

```python
applies_to_all_protected_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is applied to all protected branches.

If set to 'true', the value of `protected_branch_ids` is ignored. Default is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#applies_to_all_protected_branches ProjectApprovalRule#applies_to_all_protected_branches}

---

##### `disable_importing_default_any_approver_rule_on_create`<sup>Optional</sup> <a name="disable_importing_default_any_approver_rule_on_create" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.disableImportingDefaultAnyApproverRuleOnCreate"></a>

```python
disable_importing_default_any_approver_rule_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this flag is set, the default `any_approver` rule will not be imported if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#disable_importing_default_any_approver_rule_on_create ProjectApprovalRule#disable_importing_default_any_approver_rule_on_create}

---

##### `group_ids`<sup>Optional</sup> <a name="group_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.groupIds"></a>

```python
group_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A list of group IDs whose members can approve of the merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#group_ids ProjectApprovalRule#group_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#id ProjectApprovalRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protected_branch_ids`<sup>Optional</sup> <a name="protected_branch_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.protectedBranchIds"></a>

```python
protected_branch_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A list of protected branch IDs (not branch names) for which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#protected_branch_ids ProjectApprovalRule#protected_branch_ids}

---

##### `rule_type`<sup>Optional</sup> <a name="rule_type" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

String, defaults to 'regular'.

The type of rule. `any_approver` is a pre-configured default rule with `approvals_required` at `0`. Valid values are `regular`, `any_approver`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#rule_type ProjectApprovalRule#rule_type}

---

##### `user_ids`<sup>Optional</sup> <a name="user_ids" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.userIds"></a>

```python
user_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A list of specific User IDs to add to the list of approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_approval_rule#user_ids ProjectApprovalRule#user_ids}

---



