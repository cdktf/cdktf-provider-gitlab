# `dataGitlabProjectIssue` Submodule <a name="`dataGitlabProjectIssue` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectIssue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectIssue <a name="DataGitlabProjectIssue" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/data-sources/project_issue gitlab_project_issue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

datagitlabprojectissue.NewDataGitlabProjectIssue(scope Construct, id *string, config DataGitlabProjectIssueConfig) DataGitlabProjectIssue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig">DataGitlabProjectIssueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig">DataGitlabProjectIssueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectIssue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

datagitlabprojectissue.DataGitlabProjectIssue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

datagitlabprojectissue.DataGitlabProjectIssue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

datagitlabprojectissue.DataGitlabProjectIssue_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

datagitlabprojectissue.DataGitlabProjectIssue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabProjectIssue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabProjectIssue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabProjectIssue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/data-sources/project_issue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectIssue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.assigneeIds">AssigneeIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.authorId">AuthorId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.closedAt">ClosedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.closedByUserId">ClosedByUserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.confidential">Confidential</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.discussionLocked">DiscussionLocked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.discussionToResolve">DiscussionToResolve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.downvotes">Downvotes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.dueDate">DueDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.epicId">EpicId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.epicIssueId">EpicIssueId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.humanTimeEstimate">HumanTimeEstimate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.humanTotalTimeSpent">HumanTotalTimeSpent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueId">IssueId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueLinkId">IssueLinkId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueType">IssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.links">Links</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.mergeRequestsCount">MergeRequestsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.mergeRequestToResolveDiscussionsOf">MergeRequestToResolveDiscussionsOf</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.milestoneId">MilestoneId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.movedToId">MovedToId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.references">References</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.subscribed">Subscribed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.taskCompletionStatus">TaskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList">DataGitlabProjectIssueTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.timeEstimate">TimeEstimate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.totalTimeSpent">TotalTimeSpent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.upvotes">Upvotes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.userNotesCount">UserNotesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.iidInput">IidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.iid">Iid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AssigneeIds`<sup>Required</sup> <a name="AssigneeIds" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.assigneeIds"></a>

```go
func AssigneeIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `AuthorId`<sup>Required</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.authorId"></a>

```go
func AuthorId() *f64
```

- *Type:* *f64

---

##### `ClosedAt`<sup>Required</sup> <a name="ClosedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.closedAt"></a>

```go
func ClosedAt() *string
```

- *Type:* *string

---

##### `ClosedByUserId`<sup>Required</sup> <a name="ClosedByUserId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.closedByUserId"></a>

```go
func ClosedByUserId() *f64
```

- *Type:* *f64

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.confidential"></a>

```go
func Confidential() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscussionLocked`<sup>Required</sup> <a name="DiscussionLocked" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.discussionLocked"></a>

```go
func DiscussionLocked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiscussionToResolve`<sup>Required</sup> <a name="DiscussionToResolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.discussionToResolve"></a>

```go
func DiscussionToResolve() *string
```

- *Type:* *string

---

##### `Downvotes`<sup>Required</sup> <a name="Downvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.downvotes"></a>

```go
func Downvotes() *f64
```

- *Type:* *f64

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.dueDate"></a>

```go
func DueDate() *string
```

- *Type:* *string

---

##### `EpicId`<sup>Required</sup> <a name="EpicId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.epicId"></a>

```go
func EpicId() *f64
```

- *Type:* *f64

---

##### `EpicIssueId`<sup>Required</sup> <a name="EpicIssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.epicIssueId"></a>

```go
func EpicIssueId() *f64
```

- *Type:* *f64

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `HumanTimeEstimate`<sup>Required</sup> <a name="HumanTimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.humanTimeEstimate"></a>

```go
func HumanTimeEstimate() *string
```

- *Type:* *string

---

##### `HumanTotalTimeSpent`<sup>Required</sup> <a name="HumanTotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.humanTotalTimeSpent"></a>

```go
func HumanTotalTimeSpent() *string
```

- *Type:* *string

---

##### `IssueId`<sup>Required</sup> <a name="IssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueId"></a>

```go
func IssueId() *f64
```

- *Type:* *f64

---

##### `IssueLinkId`<sup>Required</sup> <a name="IssueLinkId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueLinkId"></a>

```go
func IssueLinkId() *f64
```

- *Type:* *f64

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.issueType"></a>

```go
func IssueType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.links"></a>

```go
func Links() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MergeRequestsCount`<sup>Required</sup> <a name="MergeRequestsCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.mergeRequestsCount"></a>

```go
func MergeRequestsCount() *f64
```

- *Type:* *f64

---

##### `MergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="MergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.mergeRequestToResolveDiscussionsOf"></a>

```go
func MergeRequestToResolveDiscussionsOf() *f64
```

- *Type:* *f64

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.milestoneId"></a>

```go
func MilestoneId() *f64
```

- *Type:* *f64

---

##### `MovedToId`<sup>Required</sup> <a name="MovedToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.movedToId"></a>

```go
func MovedToId() *f64
```

- *Type:* *f64

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.references"></a>

```go
func References() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Subscribed`<sup>Required</sup> <a name="Subscribed" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.subscribed"></a>

```go
func Subscribed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TaskCompletionStatus`<sup>Required</sup> <a name="TaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.taskCompletionStatus"></a>

```go
func TaskCompletionStatus() DataGitlabProjectIssueTaskCompletionStatusList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList">DataGitlabProjectIssueTaskCompletionStatusList</a>

---

##### `TimeEstimate`<sup>Required</sup> <a name="TimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.timeEstimate"></a>

```go
func TimeEstimate() *f64
```

- *Type:* *f64

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `TotalTimeSpent`<sup>Required</sup> <a name="TotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.totalTimeSpent"></a>

```go
func TotalTimeSpent() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Upvotes`<sup>Required</sup> <a name="Upvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.upvotes"></a>

```go
func Upvotes() *f64
```

- *Type:* *f64

---

##### `UserNotesCount`<sup>Required</sup> <a name="UserNotesCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.userNotesCount"></a>

```go
func UserNotesCount() *f64
```

- *Type:* *f64

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IidInput`<sup>Optional</sup> <a name="IidInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.iidInput"></a>

```go
func IidInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Iid`<sup>Required</sup> <a name="Iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.iid"></a>

```go
func Iid() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectIssueConfig <a name="DataGitlabProjectIssueConfig" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

&datagitlabprojectissue.DataGitlabProjectIssueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Iid: *f64,
	Project: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.iid">Iid</a></code> | <code>*f64</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.project">Project</a></code> | <code>*string</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/data-sources/project_issue#id DataGitlabProjectIssue#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Iid`<sup>Required</sup> <a name="Iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.iid"></a>

```go
Iid *f64
```

- *Type:* *f64

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/data-sources/project_issue#iid DataGitlabProjectIssue#iid}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/data-sources/project_issue#project DataGitlabProjectIssue#project}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/data-sources/project_issue#id DataGitlabProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGitlabProjectIssueTaskCompletionStatus <a name="DataGitlabProjectIssueTaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

&datagitlabprojectissue.DataGitlabProjectIssueTaskCompletionStatus {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectIssueTaskCompletionStatusList <a name="DataGitlabProjectIssueTaskCompletionStatusList" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

datagitlabprojectissue.NewDataGitlabProjectIssueTaskCompletionStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabProjectIssueTaskCompletionStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.get"></a>

```go
func Get(index *f64) DataGitlabProjectIssueTaskCompletionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabProjectIssueTaskCompletionStatusOutputReference <a name="DataGitlabProjectIssueTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabprojectissue"

datagitlabprojectissue.NewDataGitlabProjectIssueTaskCompletionStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabProjectIssueTaskCompletionStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.completedCount">CompletedCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus">DataGitlabProjectIssueTaskCompletionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompletedCount`<sup>Required</sup> <a name="CompletedCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.completedCount"></a>

```go
func CompletedCount() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabProjectIssueTaskCompletionStatus
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssue.DataGitlabProjectIssueTaskCompletionStatus">DataGitlabProjectIssueTaskCompletionStatus</a>

---



