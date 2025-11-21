# `dataGitlabArtifactFile` Submodule <a name="`dataGitlabArtifactFile` Submodule" id="@cdktf/provider-gitlab.dataGitlabArtifactFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabArtifactFile <a name="DataGitlabArtifactFile" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file gitlab_artifact_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer"></a>

```typescript
import { dataGitlabArtifactFile } from '@cdktf/provider-gitlab'

new dataGitlabArtifactFile.DataGitlabArtifactFile(scope: Construct, id: string, config: DataGitlabArtifactFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig">DataGitlabArtifactFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig">DataGitlabArtifactFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.resetMaxSizeBytes">resetMaxSizeBytes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxSizeBytes` <a name="resetMaxSizeBytes" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.resetMaxSizeBytes"></a>

```typescript
public resetMaxSizeBytes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabArtifactFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isConstruct"></a>

```typescript
import { dataGitlabArtifactFile } from '@cdktf/provider-gitlab'

dataGitlabArtifactFile.DataGitlabArtifactFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformElement"></a>

```typescript
import { dataGitlabArtifactFile } from '@cdktf/provider-gitlab'

dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformDataSource"></a>

```typescript
import { dataGitlabArtifactFile } from '@cdktf/provider-gitlab'

dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport"></a>

```typescript
import { dataGitlabArtifactFile } from '@cdktf/provider-gitlab'

dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabArtifactFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabArtifactFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabArtifactFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabArtifactFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.artifactPathInput">artifactPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.jobInput">jobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.maxSizeBytesInput">maxSizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.artifactPath">artifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.job">job</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.maxSizeBytes">maxSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.ref">ref</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `artifactPathInput`<sup>Optional</sup> <a name="artifactPathInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.artifactPathInput"></a>

```typescript
public readonly artifactPathInput: string;
```

- *Type:* string

---

##### `jobInput`<sup>Optional</sup> <a name="jobInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.jobInput"></a>

```typescript
public readonly jobInput: string;
```

- *Type:* string

---

##### `maxSizeBytesInput`<sup>Optional</sup> <a name="maxSizeBytesInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.maxSizeBytesInput"></a>

```typescript
public readonly maxSizeBytesInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.job"></a>

```typescript
public readonly job: string;
```

- *Type:* string

---

##### `maxSizeBytes`<sup>Required</sup> <a name="maxSizeBytes" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.maxSizeBytes"></a>

```typescript
public readonly maxSizeBytes: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabArtifactFileConfig <a name="DataGitlabArtifactFileConfig" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.Initializer"></a>

```typescript
import { dataGitlabArtifactFile } from '@cdktf/provider-gitlab'

const dataGitlabArtifactFileConfig: dataGitlabArtifactFile.DataGitlabArtifactFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.artifactPath">artifactPath</a></code> | <code>string</code> | Path to the artifact file within the job's artifacts archive. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.job">job</a></code> | <code>string</code> | The name of the job. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.project">project</a></code> | <code>string</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.ref">ref</a></code> | <code>string</code> | The name of the branch, tag, or commit SHA. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.maxSizeBytes">maxSizeBytes</a></code> | <code>number</code> | Maximum bytes to read from the artifact. Defaults to 10MB (10485760 bytes). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

Path to the artifact file within the job's artifacts archive.

This path is relative to the archive contents (not the local filesystem). Ensure each `gitlab_artifact_file` data source in your configuration uses a unique artifact_path to avoid ambiguity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#artifact_path DataGitlabArtifactFile#artifact_path}

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.job"></a>

```typescript
public readonly job: string;
```

- *Type:* string

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#job DataGitlabArtifactFile#job}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#project DataGitlabArtifactFile#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The name of the branch, tag, or commit SHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#ref DataGitlabArtifactFile#ref}

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-gitlab.dataGitlabArtifactFile.DataGitlabArtifactFileConfig.property.maxSizeBytes"></a>

```typescript
public readonly maxSizeBytes: number;
```

- *Type:* number

Maximum bytes to read from the artifact. Defaults to 10MB (10485760 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#max_size_bytes DataGitlabArtifactFile#max_size_bytes}

---



