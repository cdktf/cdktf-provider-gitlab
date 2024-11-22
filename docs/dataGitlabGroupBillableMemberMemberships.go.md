# `dataGitlabGroupBillableMemberMemberships` Submodule <a name="`dataGitlabGroupBillableMemberMemberships` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupBillableMemberMemberships <a name="DataGitlabGroupBillableMemberMemberships" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/group_billable_member_memberships gitlab_group_billable_member_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

datagitlabgroupbillablemembermemberships.NewDataGitlabGroupBillableMemberMemberships(scope Construct, id *string, config DataGitlabGroupBillableMemberMembershipsConfig) DataGitlabGroupBillableMemberMemberships
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig">DataGitlabGroupBillableMemberMembershipsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig">DataGitlabGroupBillableMemberMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabGroupBillableMemberMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

datagitlabgroupbillablemembermemberships.DataGitlabGroupBillableMemberMemberships_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

datagitlabgroupbillablemembermemberships.DataGitlabGroupBillableMemberMemberships_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

datagitlabgroupbillablemembermemberships.DataGitlabGroupBillableMemberMemberships_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

datagitlabgroupbillablemembermemberships.DataGitlabGroupBillableMemberMemberships_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabGroupBillableMemberMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabGroupBillableMemberMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabGroupBillableMemberMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/group_billable_member_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupBillableMemberMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.memberships">Memberships</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList">DataGitlabGroupBillableMemberMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Memberships`<sup>Required</sup> <a name="Memberships" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.memberships"></a>

```go
func Memberships() DataGitlabGroupBillableMemberMembershipsMembershipsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList">DataGitlabGroupBillableMemberMembershipsMembershipsList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMemberships.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupBillableMemberMembershipsConfig <a name="DataGitlabGroupBillableMemberMembershipsConfig" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

&datagitlabgroupbillablemembermemberships.DataGitlabGroupBillableMemberMembershipsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.groupId">GroupId</a></code> | <code>*string</code> | The ID of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.userId">UserId</a></code> | <code>*f64</code> | The ID of the user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/group_billable_member_memberships#group_id DataGitlabGroupBillableMemberMemberships#group_id}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsConfig.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

The ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/group_billable_member_memberships#user_id DataGitlabGroupBillableMemberMemberships#user_id}

---

### DataGitlabGroupBillableMemberMembershipsMemberships <a name="DataGitlabGroupBillableMemberMembershipsMemberships" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

&datagitlabgroupbillablemembermemberships.DataGitlabGroupBillableMemberMembershipsMemberships {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupBillableMemberMembershipsMembershipsList <a name="DataGitlabGroupBillableMemberMembershipsMembershipsList" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

datagitlabgroupbillablemembermemberships.NewDataGitlabGroupBillableMemberMembershipsMembershipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabGroupBillableMemberMembershipsMembershipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.get"></a>

```go
func Get(index *f64) DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference <a name="DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupbillablemembermemberships"

datagitlabgroupbillablemembermemberships.NewDataGitlabGroupBillableMemberMembershipsMembershipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceFullName">SourceFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceMembersUrl">SourceMembersUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships">DataGitlabGroupBillableMemberMembershipsMemberships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `SourceFullName`<sup>Required</sup> <a name="SourceFullName" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceFullName"></a>

```go
func SourceFullName() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `SourceMembersUrl`<sup>Required</sup> <a name="SourceMembersUrl" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.sourceMembersUrl"></a>

```go
func SourceMembersUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMembershipsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabGroupBillableMemberMembershipsMemberships
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupBillableMemberMemberships.DataGitlabGroupBillableMemberMembershipsMemberships">DataGitlabGroupBillableMemberMembershipsMemberships</a>

---



