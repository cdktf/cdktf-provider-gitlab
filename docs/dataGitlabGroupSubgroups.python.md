# `data_gitlab_group_subgroups`

Refer to the Terraform Registory for docs: [`data_gitlab_group_subgroups`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups).

# `dataGitlabGroupSubgroups` Submodule <a name="`dataGitlabGroupSubgroups` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupSubgroups <a name="DataGitlabGroupSubgroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups gitlab_group_subgroups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: typing.Union[int, float],
  all_available: typing.Union[bool, IResolvable] = None,
  id: str = None,
  min_access_level: str = None,
  order_by: str = None,
  owned: typing.Union[bool, IResolvable] = None,
  search: str = None,
  skip_groups: typing.List[typing.Union[int, float]] = None,
  sort: str = None,
  statistics: typing.Union[bool, IResolvable] = None,
  with_custom_attributes: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.allAvailable">all_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Show all the groups you have access to. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#id DataGitlabGroupSubgroups#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.minAccessLevel">min_access_level</a></code> | <code>str</code> | Limit to groups where current user has at least this access level. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.orderBy">order_by</a></code> | <code>str</code> | Order groups by name, path or id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.owned">owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit to groups explicitly owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.search">search</a></code> | <code>str</code> | Return the list of authorized groups matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.skipGroups">skip_groups</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Skip the group IDs passed. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.sort">sort</a></code> | <code>str</code> | Order groups in asc or desc order. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.statistics">statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include group statistics (administrators only). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.withCustomAttributes">with_custom_attributes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include custom attributes in response (administrators only). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.groupId"></a>

- *Type:* typing.Union[int, float]

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#group_id DataGitlabGroupSubgroups#group_id}

---

##### `all_available`<sup>Optional</sup> <a name="all_available" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.allAvailable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show all the groups you have access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#all_available DataGitlabGroupSubgroups#all_available}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#id DataGitlabGroupSubgroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_access_level`<sup>Optional</sup> <a name="min_access_level" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.minAccessLevel"></a>

- *Type:* str

Limit to groups where current user has at least this access level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#min_access_level DataGitlabGroupSubgroups#min_access_level}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.orderBy"></a>

- *Type:* str

Order groups by name, path or id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#order_by DataGitlabGroupSubgroups#order_by}

---

##### `owned`<sup>Optional</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.owned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit to groups explicitly owned by the current user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#owned DataGitlabGroupSubgroups#owned}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.search"></a>

- *Type:* str

Return the list of authorized groups matching the search criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#search DataGitlabGroupSubgroups#search}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.skipGroups"></a>

- *Type:* typing.List[typing.Union[int, float]]

Skip the group IDs passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#skip_groups DataGitlabGroupSubgroups#skip_groups}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.sort"></a>

- *Type:* str

Order groups in asc or desc order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#sort DataGitlabGroupSubgroups#sort}

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.statistics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include group statistics (administrators only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#statistics DataGitlabGroupSubgroups#statistics}

---

##### `with_custom_attributes`<sup>Optional</sup> <a name="with_custom_attributes" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.Initializer.parameter.withCustomAttributes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include custom attributes in response (administrators only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#with_custom_attributes DataGitlabGroupSubgroups#with_custom_attributes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetAllAvailable">reset_all_available</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetMinAccessLevel">reset_min_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOrderBy">reset_order_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOwned">reset_owned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSkipGroups">reset_skip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSort">reset_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetStatistics">reset_statistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetWithCustomAttributes">reset_with_custom_attributes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_all_available` <a name="reset_all_available" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetAllAvailable"></a>

```python
def reset_all_available() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_min_access_level` <a name="reset_min_access_level" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetMinAccessLevel"></a>

```python
def reset_min_access_level() -> None
```

##### `reset_order_by` <a name="reset_order_by" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOrderBy"></a>

```python
def reset_order_by() -> None
```

##### `reset_owned` <a name="reset_owned" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetOwned"></a>

```python
def reset_owned() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_skip_groups` <a name="reset_skip_groups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSkipGroups"></a>

```python
def reset_skip_groups() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetSort"></a>

```python
def reset_sort() -> None
```

##### `reset_statistics` <a name="reset_statistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetStatistics"></a>

```python
def reset_statistics() -> None
```

##### `reset_with_custom_attributes` <a name="reset_with_custom_attributes" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.resetWithCustomAttributes"></a>

```python
def reset_with_custom_attributes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabGroupSubgroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabGroupSubgroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabGroupSubgroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabGroupSubgroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupSubgroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.subgroups">subgroups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList">DataGitlabGroupSubgroupsSubgroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.allAvailableInput">all_available_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.minAccessLevelInput">min_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.ownedInput">owned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.skipGroupsInput">skip_groups_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.sortInput">sort_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.statisticsInput">statistics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.withCustomAttributesInput">with_custom_attributes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.allAvailable">all_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.minAccessLevel">min_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.owned">owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.skipGroups">skip_groups</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.sort">sort</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.statistics">statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.withCustomAttributes">with_custom_attributes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `subgroups`<sup>Required</sup> <a name="subgroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.subgroups"></a>

```python
subgroups: DataGitlabGroupSubgroupsSubgroupsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList">DataGitlabGroupSubgroupsSubgroupsList</a>

---

##### `all_available_input`<sup>Optional</sup> <a name="all_available_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.allAvailableInput"></a>

```python
all_available_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `min_access_level_input`<sup>Optional</sup> <a name="min_access_level_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.minAccessLevelInput"></a>

```python
min_access_level_input: str
```

- *Type:* str

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `owned_input`<sup>Optional</sup> <a name="owned_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.ownedInput"></a>

```python
owned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `skip_groups_input`<sup>Optional</sup> <a name="skip_groups_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.skipGroupsInput"></a>

```python
skip_groups_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.sortInput"></a>

```python
sort_input: str
```

- *Type:* str

---

##### `statistics_input`<sup>Optional</sup> <a name="statistics_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.statisticsInput"></a>

```python
statistics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_custom_attributes_input`<sup>Optional</sup> <a name="with_custom_attributes_input" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.withCustomAttributesInput"></a>

```python
with_custom_attributes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `all_available`<sup>Required</sup> <a name="all_available" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.allAvailable"></a>

```python
all_available: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `min_access_level`<sup>Required</sup> <a name="min_access_level" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.minAccessLevel"></a>

```python
min_access_level: str
```

- *Type:* str

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `owned`<sup>Required</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.owned"></a>

```python
owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `skip_groups`<sup>Required</sup> <a name="skip_groups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.skipGroups"></a>

```python
skip_groups: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.sort"></a>

```python
sort: str
```

- *Type:* str

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.statistics"></a>

```python
statistics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_custom_attributes`<sup>Required</sup> <a name="with_custom_attributes" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.withCustomAttributes"></a>

```python
with_custom_attributes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupSubgroupsConfig <a name="DataGitlabGroupSubgroupsConfig" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group_id: typing.Union[int, float],
  all_available: typing.Union[bool, IResolvable] = None,
  id: str = None,
  min_access_level: str = None,
  order_by: str = None,
  owned: typing.Union[bool, IResolvable] = None,
  search: str = None,
  skip_groups: typing.List[typing.Union[int, float]] = None,
  sort: str = None,
  statistics: typing.Union[bool, IResolvable] = None,
  with_custom_attributes: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.allAvailable">all_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Show all the groups you have access to. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#id DataGitlabGroupSubgroups#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.minAccessLevel">min_access_level</a></code> | <code>str</code> | Limit to groups where current user has at least this access level. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.orderBy">order_by</a></code> | <code>str</code> | Order groups by name, path or id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.owned">owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Limit to groups explicitly owned by the current user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.search">search</a></code> | <code>str</code> | Return the list of authorized groups matching the search criteria. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.skipGroups">skip_groups</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Skip the group IDs passed. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.sort">sort</a></code> | <code>str</code> | Order groups in asc or desc order. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.statistics">statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include group statistics (administrators only). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.withCustomAttributes">with_custom_attributes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include custom attributes in response (administrators only). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#group_id DataGitlabGroupSubgroups#group_id}

---

##### `all_available`<sup>Optional</sup> <a name="all_available" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.allAvailable"></a>

```python
all_available: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show all the groups you have access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#all_available DataGitlabGroupSubgroups#all_available}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#id DataGitlabGroupSubgroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_access_level`<sup>Optional</sup> <a name="min_access_level" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.minAccessLevel"></a>

```python
min_access_level: str
```

- *Type:* str

Limit to groups where current user has at least this access level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#min_access_level DataGitlabGroupSubgroups#min_access_level}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

Order groups by name, path or id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#order_by DataGitlabGroupSubgroups#order_by}

---

##### `owned`<sup>Optional</sup> <a name="owned" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.owned"></a>

```python
owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Limit to groups explicitly owned by the current user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#owned DataGitlabGroupSubgroups#owned}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Return the list of authorized groups matching the search criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#search DataGitlabGroupSubgroups#search}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.skipGroups"></a>

```python
skip_groups: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Skip the group IDs passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#skip_groups DataGitlabGroupSubgroups#skip_groups}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.sort"></a>

```python
sort: str
```

- *Type:* str

Order groups in asc or desc order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#sort DataGitlabGroupSubgroups#sort}

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.statistics"></a>

```python
statistics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include group statistics (administrators only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#statistics DataGitlabGroupSubgroups#statistics}

---

##### `with_custom_attributes`<sup>Optional</sup> <a name="with_custom_attributes" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsConfig.property.withCustomAttributes"></a>

```python
with_custom_attributes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include custom attributes in response (administrators only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/group_subgroups#with_custom_attributes DataGitlabGroupSubgroups#with_custom_attributes}

---

### DataGitlabGroupSubgroupsSubgroups <a name="DataGitlabGroupSubgroupsSubgroups" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupSubgroupsSubgroupsList <a name="DataGitlabGroupSubgroupsSubgroupsList" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabGroupSubgroupsSubgroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabGroupSubgroupsSubgroupsOutputReference <a name="DataGitlabGroupSubgroupsSubgroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_group_subgroups

dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.emailsDisabled">emails_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fileTemplateProjectId">file_template_project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fullPath">full_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.ipRestrictionRanges">ip_restriction_ranges</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.lfsEnabled">lfs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.mentionsDisabled">mentions_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.parentId">parent_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.projectCreationLevel">project_creation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.requestAccessEnabled">request_access_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.sharedRunnersSetting">shared_runners_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.shareWithGroupLock">share_with_group_lock</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.statistics">statistics</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.subgroupCreationLevel">subgroup_creation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups">DataGitlabGroupSubgroupsSubgroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_devops_enabled`<sup>Required</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `default_branch_protection`<sup>Required</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.defaultBranchProtection"></a>

```python
default_branch_protection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `emails_disabled`<sup>Required</sup> <a name="emails_disabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.emailsDisabled"></a>

```python
emails_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `file_template_project_id`<sup>Required</sup> <a name="file_template_project_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fileTemplateProjectId"></a>

```python
file_template_project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `full_path`<sup>Required</sup> <a name="full_path" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.fullPath"></a>

```python
full_path: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_restriction_ranges`<sup>Required</sup> <a name="ip_restriction_ranges" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.ipRestrictionRanges"></a>

```python
ip_restriction_ranges: str
```

- *Type:* str

---

##### `lfs_enabled`<sup>Required</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.lfsEnabled"></a>

```python
lfs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mentions_disabled`<sup>Required</sup> <a name="mentions_disabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.mentionsDisabled"></a>

```python
mentions_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.parentId"></a>

```python
parent_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `project_creation_level`<sup>Required</sup> <a name="project_creation_level" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.projectCreationLevel"></a>

```python
project_creation_level: str
```

- *Type:* str

---

##### `request_access_enabled`<sup>Required</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.requestAccessEnabled"></a>

```python
request_access_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `require_two_factor_authentication`<sup>Required</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.requireTwoFactorAuthentication"></a>

```python
require_two_factor_authentication: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `shared_runners_setting`<sup>Required</sup> <a name="shared_runners_setting" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.sharedRunnersSetting"></a>

```python
shared_runners_setting: str
```

- *Type:* str

---

##### `share_with_group_lock`<sup>Required</sup> <a name="share_with_group_lock" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.shareWithGroupLock"></a>

```python
share_with_group_lock: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.statistics"></a>

```python
statistics: StringMap
```

- *Type:* cdktf.StringMap

---

##### `subgroup_creation_level`<sup>Required</sup> <a name="subgroup_creation_level" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.subgroupCreationLevel"></a>

```python
subgroup_creation_level: str
```

- *Type:* str

---

##### `two_factor_grace_period`<sup>Required</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.twoFactorGracePeriod"></a>

```python
two_factor_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `wiki_access_level`<sup>Required</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.wikiAccessLevel"></a>

```python
wiki_access_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabGroupSubgroupsSubgroups
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupSubgroups.DataGitlabGroupSubgroupsSubgroups">DataGitlabGroupSubgroupsSubgroups</a>

---



