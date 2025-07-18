# `dataGitlabUsers` Submodule <a name="`dataGitlabUsers` Submodule" id="@cdktf/provider-gitlab.dataGitlabUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabUsers <a name="DataGitlabUsers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users gitlab_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active: typing.Union[bool, IResolvable] = None,
  blocked: typing.Union[bool, IResolvable] = None,
  created_after: str = None,
  created_before: str = None,
  exclude_external: typing.Union[bool, IResolvable] = None,
  exclude_internal: typing.Union[bool, IResolvable] = None,
  external: typing.Union[bool, IResolvable] = None,
  extern_provider: str = None,
  extern_uid: str = None,
  id: str = None,
  order_by: str = None,
  search: str = None,
  sort: str = None,
  username: str = None,
  without_project_bots: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filter users that are active. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.blocked">blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filter users that are blocked. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.createdAfter">created_after</a></code> | <code>str</code> | Search for users created after a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.createdBefore">created_before</a></code> | <code>str</code> | Search for users created before a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.excludeExternal">exclude_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters only non external users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.excludeInternal">exclude_internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters only non internal users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.external">external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters only external users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.externProvider">extern_provider</a></code> | <code>str</code> | Lookup users by external provider. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.externUid">extern_uid</a></code> | <code>str</code> | Lookup users by external UID. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#id DataGitlabUsers#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.orderBy">order_by</a></code> | <code>str</code> | Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.search">search</a></code> | <code>str</code> | Search users by username, name or email. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.sort">sort</a></code> | <code>str</code> | Sort users' list in asc or desc order. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.username">username</a></code> | <code>str</code> | Get a single user with a specific username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.withoutProjectBots">without_project_bots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters user without project bots. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filter users that are active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#active DataGitlabUsers#active}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.blocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filter users that are blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#blocked DataGitlabUsers#blocked}

---

##### `created_after`<sup>Optional</sup> <a name="created_after" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.createdAfter"></a>

- *Type:* str

Search for users created after a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#created_after DataGitlabUsers#created_after}

---

##### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.createdBefore"></a>

- *Type:* str

Search for users created before a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#created_before DataGitlabUsers#created_before}

---

##### `exclude_external`<sup>Optional</sup> <a name="exclude_external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.excludeExternal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters only non external users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#exclude_external DataGitlabUsers#exclude_external}

---

##### `exclude_internal`<sup>Optional</sup> <a name="exclude_internal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.excludeInternal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters only non internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#exclude_internal DataGitlabUsers#exclude_internal}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.external"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters only external users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#external DataGitlabUsers#external}

---

##### `extern_provider`<sup>Optional</sup> <a name="extern_provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.externProvider"></a>

- *Type:* str

Lookup users by external provider. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#extern_provider DataGitlabUsers#extern_provider}

---

##### `extern_uid`<sup>Optional</sup> <a name="extern_uid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.externUid"></a>

- *Type:* str

Lookup users by external UID. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#extern_uid DataGitlabUsers#extern_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#id DataGitlabUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.orderBy"></a>

- *Type:* str

Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#order_by DataGitlabUsers#order_by}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.search"></a>

- *Type:* str

Search users by username, name or email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#search DataGitlabUsers#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.sort"></a>

- *Type:* str

Sort users' list in asc or desc order. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#sort DataGitlabUsers#sort}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.username"></a>

- *Type:* str

Get a single user with a specific username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#username DataGitlabUsers#username}

---

##### `without_project_bots`<sup>Optional</sup> <a name="without_project_bots" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.Initializer.parameter.withoutProjectBots"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters user without project bots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#without_project_bots DataGitlabUsers#without_project_bots}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetBlocked">reset_blocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedAfter">reset_created_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedBefore">reset_created_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExcludeExternal">reset_exclude_external</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExcludeInternal">reset_exclude_internal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternal">reset_external</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternProvider">reset_extern_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternUid">reset_extern_uid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOrderBy">reset_order_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSort">reset_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetWithoutProjectBots">reset_without_project_bots</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_blocked` <a name="reset_blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetBlocked"></a>

```python
def reset_blocked() -> None
```

##### `reset_created_after` <a name="reset_created_after" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedAfter"></a>

```python
def reset_created_after() -> None
```

##### `reset_created_before` <a name="reset_created_before" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetCreatedBefore"></a>

```python
def reset_created_before() -> None
```

##### `reset_exclude_external` <a name="reset_exclude_external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExcludeExternal"></a>

```python
def reset_exclude_external() -> None
```

##### `reset_exclude_internal` <a name="reset_exclude_internal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExcludeInternal"></a>

```python
def reset_exclude_internal() -> None
```

##### `reset_external` <a name="reset_external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternal"></a>

```python
def reset_external() -> None
```

##### `reset_extern_provider` <a name="reset_extern_provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternProvider"></a>

```python
def reset_extern_provider() -> None
```

##### `reset_extern_uid` <a name="reset_extern_uid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetExternUid"></a>

```python
def reset_extern_uid() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_order_by` <a name="reset_order_by" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetOrderBy"></a>

```python
def reset_order_by() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetSort"></a>

```python
def reset_sort() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_without_project_bots` <a name="reset_without_project_bots" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.resetWithoutProjectBots"></a>

```python
def reset_without_project_bots() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabUsers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabUsers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.users">users</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList">DataGitlabUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blockedInput">blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfterInput">created_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBeforeInput">created_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeExternalInput">exclude_external_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeInternalInput">exclude_internal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externalInput">external_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProviderInput">extern_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUidInput">extern_uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sortInput">sort_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.withoutProjectBotsInput">without_project_bots_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blocked">blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfter">created_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBefore">created_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeExternal">exclude_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeInternal">exclude_internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.external">external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProvider">extern_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUid">extern_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sort">sort</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.withoutProjectBots">without_project_bots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.users"></a>

```python
users: DataGitlabUsersUsersList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList">DataGitlabUsersUsersList</a>

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blocked_input`<sup>Optional</sup> <a name="blocked_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blockedInput"></a>

```python
blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `created_after_input`<sup>Optional</sup> <a name="created_after_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfterInput"></a>

```python
created_after_input: str
```

- *Type:* str

---

##### `created_before_input`<sup>Optional</sup> <a name="created_before_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBeforeInput"></a>

```python
created_before_input: str
```

- *Type:* str

---

##### `exclude_external_input`<sup>Optional</sup> <a name="exclude_external_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeExternalInput"></a>

```python
exclude_external_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_internal_input`<sup>Optional</sup> <a name="exclude_internal_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeInternalInput"></a>

```python
exclude_internal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_input`<sup>Optional</sup> <a name="external_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externalInput"></a>

```python
external_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extern_provider_input`<sup>Optional</sup> <a name="extern_provider_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProviderInput"></a>

```python
extern_provider_input: str
```

- *Type:* str

---

##### `extern_uid_input`<sup>Optional</sup> <a name="extern_uid_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUidInput"></a>

```python
extern_uid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sortInput"></a>

```python
sort_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `without_project_bots_input`<sup>Optional</sup> <a name="without_project_bots_input" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.withoutProjectBotsInput"></a>

```python
without_project_bots_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blocked`<sup>Required</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.blocked"></a>

```python
blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `created_after`<sup>Required</sup> <a name="created_after" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdAfter"></a>

```python
created_after: str
```

- *Type:* str

---

##### `created_before`<sup>Required</sup> <a name="created_before" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

---

##### `exclude_external`<sup>Required</sup> <a name="exclude_external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeExternal"></a>

```python
exclude_external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_internal`<sup>Required</sup> <a name="exclude_internal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.excludeInternal"></a>

```python
exclude_internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.external"></a>

```python
external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extern_provider`<sup>Required</sup> <a name="extern_provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externProvider"></a>

```python
extern_provider: str
```

- *Type:* str

---

##### `extern_uid`<sup>Required</sup> <a name="extern_uid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.externUid"></a>

```python
extern_uid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.sort"></a>

```python
sort: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `without_project_bots`<sup>Required</sup> <a name="without_project_bots" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.withoutProjectBots"></a>

```python
without_project_bots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabUsersConfig <a name="DataGitlabUsersConfig" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active: typing.Union[bool, IResolvable] = None,
  blocked: typing.Union[bool, IResolvable] = None,
  created_after: str = None,
  created_before: str = None,
  exclude_external: typing.Union[bool, IResolvable] = None,
  exclude_internal: typing.Union[bool, IResolvable] = None,
  external: typing.Union[bool, IResolvable] = None,
  extern_provider: str = None,
  extern_uid: str = None,
  id: str = None,
  order_by: str = None,
  search: str = None,
  sort: str = None,
  username: str = None,
  without_project_bots: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filter users that are active. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.blocked">blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filter users that are blocked. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdAfter">created_after</a></code> | <code>str</code> | Search for users created after a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdBefore">created_before</a></code> | <code>str</code> | Search for users created before a specific date. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.excludeExternal">exclude_external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters only non external users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.excludeInternal">exclude_internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters only non internal users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.external">external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters only external users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externProvider">extern_provider</a></code> | <code>str</code> | Lookup users by external provider. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externUid">extern_uid</a></code> | <code>str</code> | Lookup users by external UID. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#id DataGitlabUsers#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.orderBy">order_by</a></code> | <code>str</code> | Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.search">search</a></code> | <code>str</code> | Search users by username, name or email. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.sort">sort</a></code> | <code>str</code> | Sort users' list in asc or desc order. (Requires administrator privileges). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.username">username</a></code> | <code>str</code> | Get a single user with a specific username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.withoutProjectBots">without_project_bots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filters user without project bots. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filter users that are active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#active DataGitlabUsers#active}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.blocked"></a>

```python
blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filter users that are blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#blocked DataGitlabUsers#blocked}

---

##### `created_after`<sup>Optional</sup> <a name="created_after" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdAfter"></a>

```python
created_after: str
```

- *Type:* str

Search for users created after a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#created_after DataGitlabUsers#created_after}

---

##### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

Search for users created before a specific date. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#created_before DataGitlabUsers#created_before}

---

##### `exclude_external`<sup>Optional</sup> <a name="exclude_external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.excludeExternal"></a>

```python
exclude_external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters only non external users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#exclude_external DataGitlabUsers#exclude_external}

---

##### `exclude_internal`<sup>Optional</sup> <a name="exclude_internal" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.excludeInternal"></a>

```python
exclude_internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters only non internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#exclude_internal DataGitlabUsers#exclude_internal}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.external"></a>

```python
external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters only external users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#external DataGitlabUsers#external}

---

##### `extern_provider`<sup>Optional</sup> <a name="extern_provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externProvider"></a>

```python
extern_provider: str
```

- *Type:* str

Lookup users by external provider. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#extern_provider DataGitlabUsers#extern_provider}

---

##### `extern_uid`<sup>Optional</sup> <a name="extern_uid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.externUid"></a>

```python
extern_uid: str
```

- *Type:* str

Lookup users by external UID. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#extern_uid DataGitlabUsers#extern_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#id DataGitlabUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#order_by DataGitlabUsers#order_by}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Search users by username, name or email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#search DataGitlabUsers#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.sort"></a>

```python
sort: str
```

- *Type:* str

Sort users' list in asc or desc order. (Requires administrator privileges).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#sort DataGitlabUsers#sort}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Get a single user with a specific username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#username DataGitlabUsers#username}

---

##### `without_project_bots`<sup>Optional</sup> <a name="without_project_bots" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersConfig.property.withoutProjectBots"></a>

```python
without_project_bots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filters user without project bots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/users#without_project_bots DataGitlabUsers#without_project_bots}

---

### DataGitlabUsersUsers <a name="DataGitlabUsersUsers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsersUsers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabUsersUsersList <a name="DataGitlabUsersUsersList" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsersUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabUsersUsersOutputReference <a name="DataGitlabUsersUsersOutputReference" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_users

dataGitlabUsers.DataGitlabUsersUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.bio">bio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateGroup">can_create_group</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateProject">can_create_project</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.colorSchemeId">color_scheme_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.currentSignInAt">current_sign_in_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.external">external</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.externUid">extern_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isAdmin">is_admin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isBot">is_bot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.lastSignInAt">last_sign_in_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.linkedin">linkedin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.projectsLimit">projects_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.skype">skype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.themeId">theme_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twitter">twitter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twoFactorEnabled">two_factor_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.websiteUrl">website_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers">DataGitlabUsersUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `bio`<sup>Required</sup> <a name="bio" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.bio"></a>

```python
bio: str
```

- *Type:* str

---

##### `can_create_group`<sup>Required</sup> <a name="can_create_group" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateGroup"></a>

```python
can_create_group: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `can_create_project`<sup>Required</sup> <a name="can_create_project" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.canCreateProject"></a>

```python
can_create_project: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `color_scheme_id`<sup>Required</sup> <a name="color_scheme_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.colorSchemeId"></a>

```python
color_scheme_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `current_sign_in_at`<sup>Required</sup> <a name="current_sign_in_at" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.currentSignInAt"></a>

```python
current_sign_in_at: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.external"></a>

```python
external: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `extern_uid`<sup>Required</sup> <a name="extern_uid" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.externUid"></a>

```python
extern_uid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_admin`<sup>Required</sup> <a name="is_admin" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isAdmin"></a>

```python
is_admin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_bot`<sup>Required</sup> <a name="is_bot" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.isBot"></a>

```python
is_bot: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_sign_in_at`<sup>Required</sup> <a name="last_sign_in_at" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.lastSignInAt"></a>

```python
last_sign_in_at: str
```

- *Type:* str

---

##### `linkedin`<sup>Required</sup> <a name="linkedin" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.linkedin"></a>

```python
linkedin: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.namespaceId"></a>

```python
namespace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `projects_limit`<sup>Required</sup> <a name="projects_limit" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.projectsLimit"></a>

```python
projects_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `skype`<sup>Required</sup> <a name="skype" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.skype"></a>

```python
skype: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.themeId"></a>

```python
theme_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twitter"></a>

```python
twitter: str
```

- *Type:* str

---

##### `two_factor_enabled`<sup>Required</sup> <a name="two_factor_enabled" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.twoFactorEnabled"></a>

```python
two_factor_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `website_url`<sup>Required</sup> <a name="website_url" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.websiteUrl"></a>

```python
website_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsersOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabUsersUsers
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUsers.DataGitlabUsersUsers">DataGitlabUsersUsers</a>

---



