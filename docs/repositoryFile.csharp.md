# `gitlab_repository_file`

Refer to the Terraform Registory for docs: [`gitlab_repository_file`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file).

# `repositoryFile` Submodule <a name="`repositoryFile` Submodule" id="@cdktf/provider-gitlab.repositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryFile <a name="RepositoryFile" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file gitlab_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new RepositoryFile(Construct Scope, string Id, RepositoryFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig">RepositoryFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig">RepositoryFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorEmail">ResetAuthorEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorName">ResetAuthorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetExecuteFilemode">ResetExecuteFilemode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverwriteOnCreate">ResetOverwriteOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetStartBranch">ResetStartBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts"></a>

```csharp
private void PutTimeouts(RepositoryFileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

---

##### `ResetAuthorEmail` <a name="ResetAuthorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorEmail"></a>

```csharp
private void ResetAuthorEmail()
```

##### `ResetAuthorName` <a name="ResetAuthorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorName"></a>

```csharp
private void ResetAuthorName()
```

##### `ResetExecuteFilemode` <a name="ResetExecuteFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetExecuteFilemode"></a>

```csharp
private void ResetExecuteFilemode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOverwriteOnCreate` <a name="ResetOverwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverwriteOnCreate"></a>

```csharp
private void ResetOverwriteOnCreate()
```

##### `ResetStartBranch` <a name="ResetStartBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetStartBranch"></a>

```csharp
private void ResetStartBranch()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

RepositoryFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

RepositoryFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

RepositoryFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.blobId">BlobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitId">CommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentSha256">ContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lastCommitId">LastCommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference">RepositoryFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmailInput">AuthorEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorNameInput">AuthorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessageInput">CommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemodeInput">ExecuteFilemodeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreateInput">OverwriteOnCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranchInput">StartBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmail">AuthorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorName">AuthorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessage">CommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemode">ExecuteFilemode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreate">OverwriteOnCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranch">StartBranch</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BlobId`<sup>Required</sup> <a name="BlobId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.blobId"></a>

```csharp
public string BlobId { get; }
```

- *Type:* string

---

##### `CommitId`<sup>Required</sup> <a name="CommitId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitId"></a>

```csharp
public string CommitId { get; }
```

- *Type:* string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `LastCommitId`<sup>Required</sup> <a name="LastCommitId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lastCommitId"></a>

```csharp
public string LastCommitId { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeouts"></a>

```csharp
public RepositoryFileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference">RepositoryFileTimeoutsOutputReference</a>

---

##### `AuthorEmailInput`<sup>Optional</sup> <a name="AuthorEmailInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmailInput"></a>

```csharp
public string AuthorEmailInput { get; }
```

- *Type:* string

---

##### `AuthorNameInput`<sup>Optional</sup> <a name="AuthorNameInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorNameInput"></a>

```csharp
public string AuthorNameInput { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommitMessageInput`<sup>Optional</sup> <a name="CommitMessageInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessageInput"></a>

```csharp
public string CommitMessageInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ExecuteFilemodeInput`<sup>Optional</sup> <a name="ExecuteFilemodeInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemodeInput"></a>

```csharp
public object ExecuteFilemodeInput { get; }
```

- *Type:* object

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OverwriteOnCreateInput`<sup>Optional</sup> <a name="OverwriteOnCreateInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreateInput"></a>

```csharp
public object OverwriteOnCreateInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StartBranchInput`<sup>Optional</sup> <a name="StartBranchInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranchInput"></a>

```csharp
public string StartBranchInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuthorEmail`<sup>Required</sup> <a name="AuthorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmail"></a>

```csharp
public string AuthorEmail { get; }
```

- *Type:* string

---

##### `AuthorName`<sup>Required</sup> <a name="AuthorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorName"></a>

```csharp
public string AuthorName { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessage"></a>

```csharp
public string CommitMessage { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ExecuteFilemode`<sup>Required</sup> <a name="ExecuteFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemode"></a>

```csharp
public object ExecuteFilemode { get; }
```

- *Type:* object

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OverwriteOnCreate`<sup>Required</sup> <a name="OverwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreate"></a>

```csharp
public object OverwriteOnCreate { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `StartBranch`<sup>Required</sup> <a name="StartBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranch"></a>

```csharp
public string StartBranch { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryFileConfig <a name="RepositoryFileConfig" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new RepositoryFileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Branch,
    string CommitMessage,
    string Content,
    string FilePath,
    string Project,
    string AuthorEmail = null,
    string AuthorName = null,
    object ExecuteFilemode = null,
    string Id = null,
    object OverwriteOnCreate = null,
    string StartBranch = null,
    RepositoryFileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.branch">Branch</a></code> | <code>string</code> | Name of the branch to which to commit to. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.commitMessage">CommitMessage</a></code> | <code>string</code> | Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.content">Content</a></code> | <code>string</code> | File content. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.filePath">FilePath</a></code> | <code>string</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.project">Project</a></code> | <code>string</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorEmail">AuthorEmail</a></code> | <code>string</code> | Email of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorName">AuthorName</a></code> | <code>string</code> | Name of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.executeFilemode">ExecuteFilemode</a></code> | <code>object</code> | Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate">OverwriteOnCreate</a></code> | <code>object</code> | Enable overwriting existing files, defaults to `false`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.startBranch">StartBranch</a></code> | <code>string</code> | Name of the branch to start the new commit from. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Name of the branch to which to commit to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.commitMessage"></a>

```csharp
public string CommitMessage { get; set; }
```

- *Type:* string

Commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

File content.

If the content is not yet base64 encoded, it will be encoded automatically. No other encoding is currently supported, because of a [GitLab API bug](https://gitlab.com/gitlab-org/gitlab/-/issues/342430).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#content RepositoryFile#content}

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

The full path of the file.

It must be relative to the root of the project without a leading slash `/` or `./`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#file_path RepositoryFile#file_path}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#project RepositoryFile#project}

---

##### `AuthorEmail`<sup>Optional</sup> <a name="AuthorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorEmail"></a>

```csharp
public string AuthorEmail { get; set; }
```

- *Type:* string

Email of the commit author.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#author_email RepositoryFile#author_email}

---

##### `AuthorName`<sup>Optional</sup> <a name="AuthorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorName"></a>

```csharp
public string AuthorName { get; set; }
```

- *Type:* string

Name of the commit author.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#author_name RepositoryFile#author_name}

---

##### `ExecuteFilemode`<sup>Optional</sup> <a name="ExecuteFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.executeFilemode"></a>

```csharp
public object ExecuteFilemode { get; set; }
```

- *Type:* object

Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#execute_filemode RepositoryFile#execute_filemode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OverwriteOnCreate`<sup>Optional</sup> <a name="OverwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate"></a>

```csharp
public object OverwriteOnCreate { get; set; }
```

- *Type:* object

Enable overwriting existing files, defaults to `false`.

This attribute is only used during `create` and must be use carefully. We suggest to use `imports` whenever possible and limit the use of this attribute for when the project was imported on the same `apply`. This attribute is not supported during a resource import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---

##### `StartBranch`<sup>Optional</sup> <a name="StartBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.startBranch"></a>

```csharp
public string StartBranch { get; set; }
```

- *Type:* string

Name of the branch to start the new commit from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#start_branch RepositoryFile#start_branch}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.timeouts"></a>

```csharp
public RepositoryFileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#timeouts RepositoryFile#timeouts}

---

### RepositoryFileTimeouts <a name="RepositoryFileTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new RepositoryFileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#create RepositoryFile#create}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#delete RepositoryFile#delete}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#update RepositoryFile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#create RepositoryFile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#delete RepositoryFile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/repository_file#update RepositoryFile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryFileTimeoutsOutputReference <a name="RepositoryFileTimeoutsOutputReference" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new RepositoryFileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



