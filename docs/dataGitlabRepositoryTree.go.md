# `dataGitlabRepositoryTree` Submodule <a name="`dataGitlabRepositoryTree` Submodule" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabRepositoryTree <a name="DataGitlabRepositoryTree" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_tree gitlab_repository_tree}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

datagitlabrepositorytree.NewDataGitlabRepositoryTree(scope Construct, id *string, config DataGitlabRepositoryTreeConfig) DataGitlabRepositoryTree
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig">DataGitlabRepositoryTreeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig">DataGitlabRepositoryTreeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetRecursive">ResetRecursive</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetId"></a>

```go
func ResetId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRecursive` <a name="ResetRecursive" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.resetRecursive"></a>

```go
func ResetRecursive()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabRepositoryTree resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

datagitlabrepositorytree.DataGitlabRepositoryTree_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

datagitlabrepositorytree.DataGitlabRepositoryTree_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

datagitlabrepositorytree.DataGitlabRepositoryTree_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

datagitlabrepositorytree.DataGitlabRepositoryTree_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabRepositoryTree resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabRepositoryTree to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabRepositoryTree that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_tree#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabRepositoryTree to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.tree">Tree</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList">DataGitlabRepositoryTreeTreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.recursiveInput">RecursiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.recursive">Recursive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Tree`<sup>Required</sup> <a name="Tree" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.tree"></a>

```go
func Tree() DataGitlabRepositoryTreeTreeList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList">DataGitlabRepositoryTreeTreeList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RecursiveInput`<sup>Optional</sup> <a name="RecursiveInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.recursiveInput"></a>

```go
func RecursiveInput() interface{}
```

- *Type:* interface{}

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.recursive"></a>

```go
func Recursive() interface{}
```

- *Type:* interface{}

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTree.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabRepositoryTreeConfig <a name="DataGitlabRepositoryTreeConfig" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

&datagitlabrepositorytree.DataGitlabRepositoryTreeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	Ref: *string,
	Id: *string,
	Path: *string,
	Recursive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.project">Project</a></code> | <code>*string</code> | The ID or full path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.ref">Ref</a></code> | <code>*string</code> | The name of a repository branch or tag. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_tree#id DataGitlabRepositoryTree#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.path">Path</a></code> | <code>*string</code> | The path inside repository. Used to get content of subdirectories. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.recursive">Recursive</a></code> | <code>interface{}</code> | Boolean value used to get a recursive tree (false by default). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or full path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_tree#project DataGitlabRepositoryTree#project}

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

The name of a repository branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_tree#ref DataGitlabRepositoryTree#ref}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_tree#id DataGitlabRepositoryTree#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path inside repository. Used to get content of subdirectories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_tree#path DataGitlabRepositoryTree#path}

---

##### `Recursive`<sup>Optional</sup> <a name="Recursive" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeConfig.property.recursive"></a>

```go
Recursive interface{}
```

- *Type:* interface{}

Boolean value used to get a recursive tree (false by default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/repository_tree#recursive DataGitlabRepositoryTree#recursive}

---

### DataGitlabRepositoryTreeTree <a name="DataGitlabRepositoryTreeTree" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTree.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

&datagitlabrepositorytree.DataGitlabRepositoryTreeTree {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabRepositoryTreeTreeList <a name="DataGitlabRepositoryTreeTreeList" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

datagitlabrepositorytree.NewDataGitlabRepositoryTreeTreeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabRepositoryTreeTreeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.get"></a>

```go
func Get(index *f64) DataGitlabRepositoryTreeTreeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabRepositoryTreeTreeOutputReference <a name="DataGitlabRepositoryTreeTreeOutputReference" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/datagitlabrepositorytree"

datagitlabrepositorytree.NewDataGitlabRepositoryTreeTreeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabRepositoryTreeTreeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTree">DataGitlabRepositoryTreeTree</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTreeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabRepositoryTreeTree
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRepositoryTree.DataGitlabRepositoryTreeTree">DataGitlabRepositoryTreeTree</a>

---



