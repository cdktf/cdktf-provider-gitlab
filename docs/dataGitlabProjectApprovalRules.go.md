# `dataGitlabProjectApprovalRules` Submodule <a name="`dataGitlabProjectApprovalRules` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectApprovalRules <a name="DataGitlabProjectApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_approval_rules gitlab_project_approval_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

datagitlabprojectapprovalrules.NewDataGitlabProjectApprovalRules(scope Construct, id *string, config DataGitlabProjectApprovalRulesConfig) DataGitlabProjectApprovalRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig">DataGitlabProjectApprovalRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig">DataGitlabProjectApprovalRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules">PutApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetApprovalRules">ResetApprovalRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutApprovalRules` <a name="PutApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules"></a>

```go
func PutApprovalRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApprovalRules` <a name="ResetApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetApprovalRules"></a>

```go
func ResetApprovalRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectApprovalRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

datagitlabprojectapprovalrules.DataGitlabProjectApprovalRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

datagitlabprojectapprovalrules.DataGitlabProjectApprovalRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

datagitlabprojectapprovalrules.DataGitlabProjectApprovalRules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

datagitlabprojectapprovalrules.DataGitlabProjectApprovalRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabProjectApprovalRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabProjectApprovalRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabProjectApprovalRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_approval_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectApprovalRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRules">ApprovalRules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList">DataGitlabProjectApprovalRulesApprovalRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRulesInput">ApprovalRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApprovalRules`<sup>Required</sup> <a name="ApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRules"></a>

```go
func ApprovalRules() DataGitlabProjectApprovalRulesApprovalRulesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList">DataGitlabProjectApprovalRulesApprovalRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApprovalRulesInput`<sup>Optional</sup> <a name="ApprovalRulesInput" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRulesInput"></a>

```go
func ApprovalRulesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectApprovalRulesApprovalRules <a name="DataGitlabProjectApprovalRulesApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

&datagitlabprojectapprovalrules.DataGitlabProjectApprovalRulesApprovalRules {

}
```


### DataGitlabProjectApprovalRulesConfig <a name="DataGitlabProjectApprovalRulesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

&datagitlabprojectapprovalrules.DataGitlabProjectApprovalRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	ApprovalRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.project">Project</a></code> | <code>*string</code> | The ID or path with namespace that identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.approvalRules">ApprovalRules</a></code> | <code>interface{}</code> | approval_rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or path with namespace that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_approval_rules#project DataGitlabProjectApprovalRules#project}

---

##### `ApprovalRules`<sup>Optional</sup> <a name="ApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.approvalRules"></a>

```go
ApprovalRules interface{}
```

- *Type:* interface{}

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_approval_rules#approval_rules DataGitlabProjectApprovalRules#approval_rules}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectApprovalRulesApprovalRulesList <a name="DataGitlabProjectApprovalRulesApprovalRulesList" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

datagitlabprojectapprovalrules.NewDataGitlabProjectApprovalRulesApprovalRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectApprovalRulesApprovalRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get"></a>

```go
func Get(index *f64) DataGitlabProjectApprovalRulesApprovalRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGitlabProjectApprovalRulesApprovalRulesOutputReference <a name="DataGitlabProjectApprovalRulesApprovalRulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/datagitlabprojectapprovalrules"

datagitlabprojectapprovalrules.NewDataGitlabProjectApprovalRulesApprovalRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectApprovalRulesApprovalRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.appliesToAllProtectedBranches">AppliesToAllProtectedBranches</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.approvalsRequired">ApprovalsRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.eligibleApproverIds">EligibleApproverIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.groupIds">GroupIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.protectedBranchIds">ProtectedBranchIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.reportType">ReportType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.userIds">UserIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppliesToAllProtectedBranches`<sup>Required</sup> <a name="AppliesToAllProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.appliesToAllProtectedBranches"></a>

```go
func AppliesToAllProtectedBranches() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ApprovalsRequired`<sup>Required</sup> <a name="ApprovalsRequired" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.approvalsRequired"></a>

```go
func ApprovalsRequired() *f64
```

- *Type:* *f64

---

##### `EligibleApproverIds`<sup>Required</sup> <a name="EligibleApproverIds" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.eligibleApproverIds"></a>

```go
func EligibleApproverIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.groupIds"></a>

```go
func GroupIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectedBranchIds`<sup>Required</sup> <a name="ProtectedBranchIds" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.protectedBranchIds"></a>

```go
func ProtectedBranchIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.reportType"></a>

```go
func ReportType() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.userIds"></a>

```go
func UserIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



